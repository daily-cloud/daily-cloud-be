const admin = require('firebase-admin');
const firestore = require('./firestore');
const fetchPrediction = require('../utils/fetchPrediction');

const Timestamp = admin.firestore.Timestamp;

// Service to make a journals collection query
class journalService {
  constructor() {
    this.journalsRef = firestore.collection('journals');
  }

  // Method here
  async getAllJournals(uid, filter) {
    let snapshot = this.journalsRef;
    const { month, year } = filter;

    const journals = [];

    // initial query to get all journals filter by user id
    snapshot = await this.journalsRef.where('userId', '==', uid);

    // get journal filter by month and year
    if (month && year) {
      // month is 0 based
      const startTimestamp = new Date(year, month - 1, 1); // 1st day of month
      const endTimestamp = new Date(year, month, 1); // 1st day of next month

      // filter by >= startTimestamp and <= endTimestamp
      snapshot = await snapshot
        .where('date', '>=', Timestamp.fromDate(startTimestamp))
        .where('date', '<=', Timestamp.fromDate(endTimestamp))
        .get();
    } else {
      snapshot = await snapshot.get();
    }

    // push the journals to journals array
    snapshot.forEach((doc) => {
      journals.push(doc.data());
    });

    return journals;
  }

  async getJournalById(journalId) {
    const snapshot = await this.journalsRef.doc(journalId);
    const doc = await snapshot.get();

    if (!doc.exists) {
      return null;
    }

    return doc.data();
  }

  async addNewJournal(data) {
    const newJournalRef = await this.journalsRef.doc();

    const todayTimestamp = Date.now();
    // using local date (Jakarta)

    const date = Timestamp.fromMillis(todayTimestamp);

    // Predict journal content from cloud
    const prediction = await fetchPrediction(data.content);

    const newJournal = {
      ...data,
      date,
      journalId: newJournalRef.id,
      prediction,
    };

    await newJournalRef.set(newJournal);

    return newJournalRef.id;
  }

  async checkJournalToday(uid) {
    const date = new Date();

    const startTimestamp = date.setHours(0, 0, 0, 0); // set time 00:00:00
    const endTimestamp = date.setHours(23, 59, 59, 999); // set time 23:59:59

    const snapshot = await this.journalsRef
      .where('userId', '==', uid)
      .where('date', '>=', Timestamp.fromMillis(startTimestamp))
      .where('date', '<=', Timestamp.fromMillis(endTimestamp))
      .get();

    const journal = [];
    const result = {};

    if (snapshot.empty) {
      result.status = false;
      result.journal = null;
    } else {
      snapshot.forEach((doc) => {
        journal.push(doc.data());
      });

      result.status = true;
      result.journal = journal[0];
    }

    return result;
  }
}

module.exports = journalService;

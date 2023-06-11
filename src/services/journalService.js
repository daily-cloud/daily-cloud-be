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
  async getAllJournals(uid) {
    const snapshot = await this.journalsRef.get();

    const journals = [];

    // get journal filter by id user
    snapshot.forEach((doc) => {
      const userIdJournal = doc.data().userId;

      if (userIdJournal === uid) {
        journals.push(doc.data());
      }
    });

    // const filter = snapshot
    // .where('month', '==', month)
    // .where('year', '==', year)
    // .get();
    // filter.forEach(doc => {
    //   journals.push(doc.data());
    // });

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
}

module.exports = journalService;

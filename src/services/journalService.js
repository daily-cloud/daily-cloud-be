const firestore = require('./firestore');

// Service to make a journals collection query
class journalService {
  constructor() {
    this.journalsRef = firestore.collection('journals');
  }

  // Method here
  async getAllJournals(uid) {
    const snapshot = await this.journalsRef.get();

    const journals = [];

    // get journal filter by id
    snapshot.forEach((doc) => {
      const userIdJournal = doc.data().userId;

      if (userIdJournal === uid) {
        journals.push(doc.data());
      }
    });

    return journals;
  }
}

module.exports = journalService;

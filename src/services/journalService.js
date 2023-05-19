const firestore = require('./firestore');

// Service to make a journals collection query
class journalService {
  constructor() {
    this.journalsRef = firestore.collection('journals');
  }

  // Method here
  async getAllJournalsFirestore() {
    const snapshot = await this.journalsRef.get();

    const journals = [];

    snapshot.forEach((doc) => {
      const journal = doc.data();
      journals.push(journal);
    });

    return journals;
  }
}

module.exports = journalService;

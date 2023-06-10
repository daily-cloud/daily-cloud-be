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

  async getJournalById(journalId){
    const snapshot = await this.journalsRef.doc(journalId);
    const doc = await snapshot.get(); 

    if (!doc.exists) {
      return null;
    }
    console.log(doc.data());

    return doc.data();
  }
  
}

module.exports = journalService;

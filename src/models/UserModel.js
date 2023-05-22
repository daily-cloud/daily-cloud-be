const firestore = require('../services/firestore');

const defaultUserImageUrl = 'none';

class User {
  constructor(data) {
    this.data = data;
  }

  // Get user details from the database
  // The uid is from token
  // so i think we don't need to validate it
  async getUserDetails() {
    try {
      const userRef = firestore.collection('users').doc(this.data.uid);
      const snapshot = await userRef.get();

      const user = snapshot.data();

      return user;
    } catch (err) {
      throw new Error(`Failed to get user details: ${err}`);
    }
  }
}

module.exports = User;

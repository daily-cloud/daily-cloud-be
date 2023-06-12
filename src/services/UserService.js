const admin = require('firebase-admin');

const firestore = require('../google-cloud/firestore');

const Timestamp = admin.firestore.Timestamp;
const defaultUserImageUrl = 'none';

class UserService {
  constructor(data) {
    this.data = data;
  }

  // Add a new user to the database
  // TODO: Validation
  async signUpUser() {
    const birthday = Timestamp.fromDate(new Date(this.data.birthday));

    const user = {
      uid: this.data.uid,
      email: this.data.email,
      name: this.data.name,
      birthday,
      imageUrl: this.data.imageUrl || defaultUserImageUrl,
    };

    const userRef = firestore.collection('users').doc(this.data.uid);

    await userRef.set(user);

    return userRef.id;
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

  // Update user details
  async updateUserDetails() {
    try {
      const userRef = firestore.collection('users').doc(this.data.uid);
      const snapshot = await userRef.get();

      const user = snapshot.data();

      const name = this.data.name;

      const updatedData = {
        ...user, // keep the old data
        name, // update the new data
      };

      await userRef.set(updatedData);

      return this.getUserDetails();
    } catch (err) {
      throw new Error(`Failed to update user details: ${err}`);
    }
  }

  // async uploadImage(image) {}
}

module.exports = UserService;

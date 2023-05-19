const admin = require('./firebase');

// initialize firestore
const firestore = admin.firestore();

module.exports = firestore;

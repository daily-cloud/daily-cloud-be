const admin = require('firebase-admin');
// const path = require('path');

// check the code running on CLOUD RUN (without service account) or LOCAL
admin.initializeApp();

module.exports = admin;

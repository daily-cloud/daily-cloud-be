const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join(
  __dirname,
  '../../serviceAccount.json'
));

// check the code running on CLOUD RUN (without service account) or LOCAL
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;

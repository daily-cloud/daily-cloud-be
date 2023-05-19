const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join(
  __dirname,
  '../../serviceAccount.json'
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;

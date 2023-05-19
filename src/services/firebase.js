const admin = require('firebase-admin');
const path = require('path');

// check the code running on CLOUD RUN (without service account) or LOCAL
if (process.env.ENVIRONMENT === 'production') {
  admin.initializeApp();
} else {
  const serviceAccount = require(path.join(
    __dirname,
    '../../serviceAccount.json'
  ));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;

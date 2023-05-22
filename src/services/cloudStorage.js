const { Storage } = require('@google-cloud/storage');
const path = require('path');

const serviceAccount = require(path.join(
  __dirname,
  '../../serviceAccount.json'
));

// check the code running on CLOUD RUN (without service account) or LOCAL
let storage;

if (process.env.ENVIRONMENT === 'production') {
  storage = new Storage();
} else {
  storage = new Storage({
    keyFilename: serviceAccount,
  });
}

const bucketName = 'daily-cloud-bucket';
const bucket = storage.bucket(bucketName);

module.exports = bucket;

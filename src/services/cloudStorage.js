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

class CloudStorage {
  constructor() {
    const bucketName = 'daily-cloud-bucket';

    this.storage = storage;
    this.bucket = storage.bucket(bucketName);
  }

  async uploadFile(filePath, options) {
    await this.bucket.upload(filePath, options);

    console.log(`${filePath} uploaded to ${bucketName}`);
    return (publicUrl = `https://storage.googleapis.com/${bucketName}/${options.destination}`);
  }
}

module.exports = CloudStorage;

const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(__dirname, '../../serviceAccount.json'),
});

class CloudStorage {
  constructor(bucketName) {
    this.bucketName = bucketName;

    this.storage = storage;
    this.bucket = storage.bucket(this.bucketName);
  }

  async uploadFile(image) {}
}

module.exports = CloudStorage;

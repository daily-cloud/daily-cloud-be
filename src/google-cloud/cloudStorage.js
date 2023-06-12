const { Storage } = require('@google-cloud/storage');

// Cloud Run automatically configures credentials
const storage = new Storage();

class CloudStorage {
  constructor(bucketName) {
    this.bucketName = bucketName;

    this.storage = storage;
    this.bucket = storage.bucket(this.bucketName);
  }

  // async uploadFile(image) {}
}

module.exports = CloudStorage;

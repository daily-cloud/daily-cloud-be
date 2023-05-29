const { Storage } = require('@google-cloud/storage');
// const path = require('path');

// check the code running on CLOUD RUN (without service account) or LOCAL
let storage;

storage = new Storage();


class CloudStorage {
  constructor() {
    const bucketName = 'daily-cloud-bucket';

    this.storage = storage;
    this.bucket = storage.bucket(bucketName);
  }

  /*
  async uploadFile(filePath, options) {
    await this.bucket.upload(filePath, options);

    console.log(`${filePath} uploaded to ${bucketName}`);
    return (publicUrl = `https://storage.googleapis.com/${bucketName}/${options.destination}`);
  }
   */
}

module.exports = CloudStorage;

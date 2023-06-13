const admin = require('firebase-admin');

// Cloud Run automatically configures credentials
admin.initializeApp();

module.exports = admin;

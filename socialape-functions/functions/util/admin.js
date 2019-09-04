const admin = require('firebase-admin');

// initial the App see .firebaseserc ("default": "socialape-55d77")
admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
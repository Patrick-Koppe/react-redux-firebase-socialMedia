const functions = require('firebase-functions');


const app = require('express')();

const FBAuth = require('./util/fbAuth');

const {
    getAllScreams,
    postOneScream,
    getScream,
    commentOnScream,
    likeScream,
    unlikeScream,
    deleteScream
} = require('./handlers/screams');

const {
    signup,
    login,
    uploadImage,
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users');

/*
 * --------- Scream route
 */
app.get('/screams', getAllScreams); // Get "screams" in firebase table and return em as JSON Object written with express
app.post('/scream',  FBAuth, postOneScream); // Create a new Stream to firebase database
app.get('/scream/:screamId', getScream); // Route parameters
app.delete('/scream/:screamId', FBAuth, deleteScream);
app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);

/*
 * --------- Users route
 */
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);


// return multiple routes (https://baseurl.com/api/)
exports.api = functions.region('europe-west1').https.onRequest(app);
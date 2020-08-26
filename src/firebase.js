import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8RA9pkaE-v2rooLo4EbSLYEko9Vn3HQc",
    authDomain: "slack-clone-3ec0a.firebaseapp.com",
    databaseURL: "https://slack-clone-3ec0a.firebaseio.com",
    projectId: "slack-clone-3ec0a",
    storageBucket: "slack-clone-3ec0a.appspot.com",
    messagingSenderId: "727305823565",
    appId: "1:727305823565:web:2403b4a84f7e30cae28304",
    measurementId: "G-XFVNXTV058"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
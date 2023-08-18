import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnr1281A4JZSJ3IWSos7VLa2lFZYR4LtY",
  authDomain: "reels-288f0.firebaseapp.com",
  projectId: "reels-288f0",
  storageBucket: "reels-288f0.appspot.com",
  messagingSenderId: "349349791239",
  appId: "1:349349791239:web:56ffc2f8c99141f654cca2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()
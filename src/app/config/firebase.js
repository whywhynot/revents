import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Gc_1VjQxZ2bVyANKOwOmco4xw5r1U5I",
  authDomain: "bozo-1023.firebaseapp.com",
  databaseURL: "https://bozo-1023.firebaseio.com",
  projectId: "bozo-1023",
  storageBucket: "bozo-1023.appspot.com",
  messagingSenderId: "690894018687"
};

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = { /* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUsLbrCDfhs7xy_dpcZRYwTKixadWowu0",
  authDomain: "tinder-clone-6738b.firebaseapp.com",
  databaseURL: "https://tinder-clone-6738b.firebaseio.com",
  projectId: "tinder-clone-6738b",
  storageBucket: "tinder-clone-6738b.appspot.com",
  messagingSenderId: "1064032661881",
  appId: "1:1064032661881:web:9b5ec9e354a93a3871bfa8",
  measurementId: "G-5QYYHM1DYT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_ov55FSMCsZmc3GyFyHz1AYuSH9o_aOI",
  authDomain: "mitchell-browne.firebaseapp.com",
  databaseURL: "https://mitchell-browne.firebaseio.com",
  projectId: "mitchell-browne",
  storageBucket: "mitchell-browne.appspot.com",
  messagingSenderId: "227900468718",
  appId: "1:227900468718:web:9e694c14a074585ba572ff",
  measurementId: "G-347FLV5V4S"
};

const firestore = firebase.initializeApp(config);
firestore.analytics();

export default firestore;

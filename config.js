import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCqtAjD4HP2QWICMCB9wDLCjmQrtZ6G7mM",
    authDomain: "e-ride-68f9e.firebaseapp.com",
    databaseURL: "https://e-ride-68f9e-default-rtdb.firebaseio.com",
    projectId: "e-ride-68f9e",
    storageBucket: "e-ride-68f9e.appspot.com",
    messagingSenderId: "447600922932",
    appId: "1:447600922932:web:98df6a2dd6ebe174161561"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

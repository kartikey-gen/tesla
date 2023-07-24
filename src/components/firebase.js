import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAq6nGjV5SdYo5i24H_t217U5oWKb5vHzk",
    authDomain: "tesla-clone-89079.firebaseapp.com",
    projectId: "tesla-clone-89079",
    storageBucket: "tesla-clone-89079.appspot.com",
    messagingSenderId: "1014849345521",
    appId: "1:1014849345521:web:cd5a96716666ae74341650",
    measurementId: "G-WQXXR378T7"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
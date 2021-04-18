import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKEXWebTiI5LNF8uohxJG03JllHSJy9qo",
    authDomain: "crwn-clothing-db-56259.firebaseapp.com",
    projectId: "crwn-clothing-db-56259",
    storageBucket: "crwn-clothing-db-56259.appspot.com",
    messagingSenderId: "330162099076",
    appId: "1:330162099076:web:47264f362779e2504fc3d1",
    measurementId: "G-R8S8N7GEZ5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
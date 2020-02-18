import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASdWlehid_S695h_jmeV3Z3K2dbjcTXd4",
    authDomain: "crwn-db-4c84b.firebaseapp.com",
    databaseURL: "https://crwn-db-4c84b.firebaseio.com",
    projectId: "crwn-db-4c84b",
    storageBucket: "crwn-db-4c84b.appspot.com",
    messagingSenderId: "785247789712",
    appId: "1:785247789712:web:ac6057b5cff56831e7ae15",
    measurementId: "G-MGWS3S9K3W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
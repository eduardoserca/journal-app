import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZkmNXWe2dLI4v1LXUNhAm8gSfW5Ds8Fs",
    authDomain: "react-app-cursos-77963.firebaseapp.com",
    databaseURL: "https://react-app-cursos-77963.firebaseio.com",
    projectId: "react-app-cursos-77963",
    storageBucket: "react-app-cursos-77963.appspot.com",
    messagingSenderId: "805580973036",
    appId: "1:805580973036:web:fb9642f9be48bb88d016c9"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}
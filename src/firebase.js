import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBwfedFiujEhQ7Gh66ogiTiY0b4nYSEEmI",
  authDomain: "test-6bd3b.firebaseapp.com",
  databaseURL: "https://test-6bd3b-default-rtdb.firebaseio.com",
  projectId: "test-6bd3b",
  storageBucket: "test-6bd3b.appspot.com",
  messagingSenderId: "550518875120",
  appId: "1:550518875120:web:535d72aeda84693f187335",
  measurementId: "G-T0D12W1CJG",
});

export const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;

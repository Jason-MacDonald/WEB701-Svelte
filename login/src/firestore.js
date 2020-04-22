import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  authDomain: "svelte-275004.firebaseapp.com",
  databaseURL: "https://svelte-275004.firebaseio.com",
  projectId: "svelte-275004",
  storageBucket: "svelte-275004.appspot.com",
  messagingSenderId: "1002165089078",
  appId: "1:1002165089078:web:926f5f47f99c7f96317997",
  measurementId: "G-8QQ8K4J10V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

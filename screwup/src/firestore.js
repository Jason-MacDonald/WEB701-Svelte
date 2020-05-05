import firebase from "firebase/app";
import "firebase/firestore";
import test from "c:/Users/64221/Desktop/firestore";

// Initialize Firebase
firebase.initializeApp(test);

export const db = firebase.firestore();

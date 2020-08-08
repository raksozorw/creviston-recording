import firebase from "firebase"; // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import Axios from "axios";

// Initialize Firebase
let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export const db = firebase.database();

export { Axios };

// This is code to config firebase that I will use any time I want to actually interact with firebase with my own code
// This sets up the authorization to send requests, access firestore, etc.

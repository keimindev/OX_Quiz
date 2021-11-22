// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "truenfalse-26fad",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-Z6JL5K7F46",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db}
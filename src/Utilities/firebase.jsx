// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZEQV7fT2aO8K93MWfQr0r6RMIy1vc-SU",
  authDomain: "netflixgpt-onlineshows.firebaseapp.com",
  projectId: "netflixgpt-onlineshows",
  storageBucket: "netflixgpt-onlineshows.firebasestorage.app",
  messagingSenderId: "70691101184",
  appId: "1:70691101184:web:46c48b7cc7da716e9596e5",
  measurementId: "G-MDYNB4SEJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
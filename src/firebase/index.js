// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXGMIuhsYL4S91Q76-7zeUlyRndgqH8j8",
  authDomain: "teste-f55d7.firebaseapp.com",
  projectId: "teste-f55d7",
  storageBucket: "teste-f55d7.appspot.com",
  messagingSenderId: "228761652481",
  appId: "1:228761652481:web:18f1934a0de7d461ab9f00",
  measurementId: "G-LSDRZVJ2DT"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
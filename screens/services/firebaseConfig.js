// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// /import { getAnalytics } from "firebase/analytics";
import * as firebase from "@firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv9Xw3oH2JMVA3t-M5Qr5p3ReK_K4ZAek",
  authDomain: "bracketsapp-backend.firebaseapp.com",
  projectId: "bracketsapp-backend",
  storageBucket: "bracketsapp-backend.appspot.com",
  messagingSenderId: "8446857693",
  appId: "1:8446857693:web:2219edaf7af86bb9b4a634",
  measurementId: "G-W0ZVBHDFKP",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };

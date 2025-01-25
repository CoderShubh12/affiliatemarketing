// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzeOKO7mL3UpCTds_0alDLPBwopPvUYlQ",
  authDomain: "affiliate-store-397ec.firebaseapp.com",
  projectId: "affiliate-store-397ec",
  storageBucket: "affiliate-store-397ec.firebasestorage.app",
  messagingSenderId: "630188637447",
  appId: "1:630188637447:web:eecf036ff12640094d19a2",
  measurementId: "G-93PSGQKW83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db, collection, getDocs };

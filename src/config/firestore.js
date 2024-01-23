// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = import.meta.env.VITE_FIRESTORE_API;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: (VITE_FIRESTORE_API = AIzaSyBs6a0635566nHyEq6FtfqiSubZIeyGZMM),
  authDomain: "portfolio-bbcfc.firebaseapp.com",
  projectId: "portfolio-bbcfc",
  storageBucket: "portfolio-bbcfc.appspot.com",
  messagingSenderId: "589572668307",
  appId: "1:589572668307:web:9498e006eefa55addac666",
  measurementId: "G-FF7K2RE5SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

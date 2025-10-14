// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fFddHodjhEyHlTlH1dWkY2bymkQUMoU",
  authDomain: "interviewprep-8b2ea.firebaseapp.com",
  projectId: "interviewprep-8b2ea",
  storageBucket: "interviewprep-8b2ea.firebasestorage.app",
  messagingSenderId: "335854305011",
  appId: "1:335854305011:web:4edf2c5e44e11d7d25c186",
  measurementId: "G-J8RTWQL5LD"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();
export const auth=getAuth(app);
export const db =getFirestore(app);
'use client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAsIAfF7Q6bXseZA0yPqeAPM6FVMAcxR4",
  authDomain: "personal-portfolio-92cfb.firebaseapp.com",
  projectId: "personal-portfolio-92cfb",
  storageBucket: "personal-portfolio-92cfb.appspot.com",
  messagingSenderId: "425812954584",
  appId: "1:425812954584:web:9d79728b094a8a1ce6b6ad",
  measurementId: "G-0YXGN2DM94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
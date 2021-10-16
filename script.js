// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB7BlT6GDXGs-B2zICyhLYBdF8zbNfCgo",
  authDomain: "vote-for-teacher.firebaseapp.com",
  projectId: "vote-for-teacher",
  storageBucket: "vote-for-teacher.appspot.com",
  messagingSenderId: "819810192801",
  appId: "1:819810192801:web:f33d681582055ff5030fe0",
  measurementId: "G-Z4F7S8RZEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43Saw2KJgixZkHtSKRDl0T_R0MLq6yew",
  authDomain: "react-2gechan.firebaseapp.com",
  projectId: "react-2gechan",
  storageBucket: "react-2gechan.appspot.com",
  messagingSenderId: "410814715783",
  appId: "1:410814715783:web:26eb8b26d37c57880fe522",
  measurementId: "G-GT2HW1WPZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

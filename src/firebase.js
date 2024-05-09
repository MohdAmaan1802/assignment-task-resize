// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUWm2xPnqFmtAz1UfuiFrzdoJd4YbsHk",
  authDomain: "assignment-task-c3818.firebaseapp.com",
  projectId: "assignment-task-c3818",
  storageBucket: "assignment-task-c3818.appspot.com",
  messagingSenderId: "921780344914",
  appId: "1:921780344914:web:7caddc5017c1705dc0a78b",
  measurementId: "G-31YD2ZGSJP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

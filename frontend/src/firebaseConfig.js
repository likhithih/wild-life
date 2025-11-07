// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6A0FxhC4P_iwieOLXfqLa_6SlQL9dGgU",
  authDomain: "travel-934d2.firebaseapp.com",
  projectId: "travel-934d2",
  storageBucket: "travel-934d2.firebasestorage.app",
  messagingSenderId: "297440741761",
  appId: "1:297440741761:web:2c904b00c71b2241240080",
  measurementId: "G-24FV2QPLH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

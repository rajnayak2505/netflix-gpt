// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUGA-ZPYiB8s5LMstyp1XsRVqH8k3zbj8",
  authDomain: "netflix-gpt-online.firebaseapp.com",
  projectId: "netflix-gpt-online",
  storageBucket: "netflix-gpt-online.appspot.com",
  messagingSenderId: "496956366627",
  appId: "1:496956366627:web:1a46dc98f778b179493696",
  measurementId: "G-QDZEGK8BPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
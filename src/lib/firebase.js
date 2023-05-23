// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyiIGdpcGnVUHfxOZOi2RBtABFhgW5gE",
  authDomain: "docs-1841f.firebaseapp.com",
  projectId: "docs-1841f",
  storageBucket: "docs-1841f.appspot.com",
  messagingSenderId: "883287800502",
  appId: "1:883287800502:web:58b19476844c0b7ad84417",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

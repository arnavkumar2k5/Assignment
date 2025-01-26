// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMlPOC-T0hF5xC9F7tlfZtb_YYnYhp2n4",
  authDomain: "assignment-22f40.firebaseapp.com",
  projectId: "assignment-22f40",
  storageBucket: "assignment-22f40.firebasestorage.app",
  messagingSenderId: "50451135950",
  appId: "1:50451135950:web:22d0cbd9a749273d483f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;
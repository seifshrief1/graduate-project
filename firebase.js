// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA05To6hXz2dVbLUZb6xwtXZ21nE_HFw50",
  authDomain: "graduate-project-d02e0.firebaseapp.com",
  projectId: "graduate-project-d02e0",
  storageBucket: "graduate-project-d02e0.firebasestorage.app",
  messagingSenderId: "224172437931",
  appId: "1:224172437931:web:0dcc481bf2bc54e1a462ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
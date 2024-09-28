import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-80f73.firebaseapp.com",
  projectId: "reactchat-80f73",
  storageBucket: "reactchat-80f73.appspot.com",
  messagingSenderId: "1077700159713",
  appId: "1:1077700159713:web:ec056c0e2b8cf555aa2fa0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

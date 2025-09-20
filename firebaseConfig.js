// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjZwJj0jZOcI_fNlQr-bFe1Q_SJ2oCsRU",
  authDomain: "grindgear-e00a2.firebaseapp.com",
  projectId: "grindgear-e00a2",
  storageBucket: "grindgear-e00a2.firebasestorage.app",
  messagingSenderId: "410584893742",
  appId: "1:410584893742:web:eca080fd36e2b7391c12bf"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

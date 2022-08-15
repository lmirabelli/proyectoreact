// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQo9ogL4ja26KnwfmK-InSH3d3xggKkV8",
  authDomain: "react-chuchesport.firebaseapp.com",
  projectId: "react-chuchesport",
  storageBucket: "react-chuchesport.appspot.com",
  messagingSenderId: "611636335453",
  appId: "1:611636335453:web:b926d69c8e4d37ddd64eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
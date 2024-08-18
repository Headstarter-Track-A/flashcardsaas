// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuaUBlpt6XuRJIlRsxf0i8jkuFyQvOrTY",
  authDomain: "flashcardsaas-3d6e0.firebaseapp.com",
  projectId: "flashcardsaas-3d6e0",
  storageBucket: "flashcardsaas-3d6e0.appspot.com",
  messagingSenderId: "955956195129",
  appId: "1:955956195129:web:31b3f06dddd38892c5c2e8",
  measurementId: "G-7E6XJPCQ7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
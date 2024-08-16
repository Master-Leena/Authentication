// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGyyYPiS0jJF0BXK4UKLHYm8OLGrG1yb8",
  authDomain: "saylanibathch-11.firebaseapp.com",
  projectId: "saylanibathch-11",
  storageBucket: "saylanibathch-11.appspot.com",
  messagingSenderId: "678472179370",
  appId: "1:678472179370:web:faf77e0fce7775f980bad3",
  measurementId: "G-D5NQLJ5G0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged}
// const analytics = getAnalytics(app);
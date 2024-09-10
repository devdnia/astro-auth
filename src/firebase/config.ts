// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQthU95ktiQco7ifqVurG0J8Ep0Ay0UEg",
  authDomain: "astro-authentication-54a31.firebaseapp.com",
  projectId: "astro-authentication-54a31",
  storageBucket: "astro-authentication-54a31.appspot.com",
  messagingSenderId: "863752568231",
  appId: "1:863752568231:web:fcb0473df1b3f82253ca82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth( app );

export const firebase = {
    app,
    auth,
}
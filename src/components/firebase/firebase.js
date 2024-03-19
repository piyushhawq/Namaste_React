import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCRlGnHdURzRffUwlJOOgve2MIqaLdZMoE",
  authDomain: "bytebhojan-76f73.firebaseapp.com",
  projectId: "bytebhojan-76f73",
  storageBucket: "bytebhojan-76f73.appspot.com",
  messagingSenderId: "898140541601",
  appId: "1:898140541601:web:5f3cc537e6e05c270b56e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth();

// console.log(auth); // Check what values are available here


export  { app,auth};
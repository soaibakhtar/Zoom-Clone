// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfbdcCc9uNpS663LHAJ3hoaMrQrKGpJbM",
  authDomain: "zoom-clone-530b5.firebaseapp.com",
  projectId: "zoom-clone-530b5",
  storageBucket: "zoom-clone-530b5.appspot.com",
  messagingSenderId: "459718319601",
  appId: "1:459718319601:web:4c9fd73458ff9bc666f850",
  measurementId: "G-1MXX5XZYCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const userRef = collection(firebaseDB,"users");
export const meetingRef = collection(firebaseDB,"meetings")
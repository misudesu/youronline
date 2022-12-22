// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFiH8_ckDix5_tv-C4QOKDpwDdgCCjl4",
  authDomain: "online-c787a.firebaseapp.com",
  projectId: "online-c787a",
  storageBucket: "online-c787a.appspot.com",
  messagingSenderId: "26061600736",
  appId: "1:26061600736:web:f632b49b1bf78e5cef1d85",
  measurementId: "G-2G89Y4ZX36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
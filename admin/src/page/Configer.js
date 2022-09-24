// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjV1Agqxbqc53tkextQOURnWQHJ06Klyo",
  authDomain: "muse-2e5b2.firebaseapp.com",
  projectId: "muse-2e5b2",
  storageBucket: "muse-2e5b2.appspot.com",
  messagingSenderId: "545187209352",
  appId: "1:545187209352:web:c473b7b1be9aeb975cff3d",
  measurementId: "G-QC5HB5P70K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
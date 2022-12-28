// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwc-NFjMVSRq1j8GAY3cdo1xyltIKAOco",
  authDomain: "first-react-f53f3.firebaseapp.com",
  projectId: "first-react-f53f3",
  storageBucket: "first-react-f53f3.appspot.com",
  messagingSenderId: "611559839265",
  appId: "1:611559839265:web:416a4e6126d566b9b8b560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
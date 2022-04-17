// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBfdbmRhLs3CYNDPF94TDGrmdPdCMr9s",
  authDomain: "independent-service-prov-ad782.firebaseapp.com",
  projectId: "independent-service-prov-ad782",
  storageBucket: "independent-service-prov-ad782.appspot.com",
  messagingSenderId: "613573779349",
  appId: "1:613573779349:web:e85065025024b84e69209c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;

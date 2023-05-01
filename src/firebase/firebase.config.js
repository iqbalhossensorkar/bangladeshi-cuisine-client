// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsrd78RTa5yxmeYQCQOicT2GYY80O511U",
  authDomain: "bangladeshi-cuisine.firebaseapp.com",
  projectId: "bangladeshi-cuisine",
  storageBucket: "bangladeshi-cuisine.appspot.com",
  messagingSenderId: "812793741857",
  appId: "1:812793741857:web:9e18eaee8999f0ab41d960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
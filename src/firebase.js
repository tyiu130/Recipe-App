// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR9CWmfwOB9NvRxgyINPmRkqEjPOv-rVU",
    authDomain: "recipe-app-d84b3.firebaseapp.com",
    projectId: "recipe-app-d84b3",
    storageBucket: "recipe-app-d84b3.appspot.com",
    messagingSenderId: "981203833963",
    appId: "1:981203833963:web:d9acc7a090c667b66c0d2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

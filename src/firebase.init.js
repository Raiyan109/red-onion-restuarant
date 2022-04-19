// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-lVLgbgRApR9tCT7DIU8TarnqksqiKP4",
    authDomain: "red-onion-restaurant-f2cdd.firebaseapp.com",
    projectId: "red-onion-restaurant-f2cdd",
    storageBucket: "red-onion-restaurant-f2cdd.appspot.com",
    messagingSenderId: "360421533830",
    appId: "1:360421533830:web:467134ef3de5a33c430907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
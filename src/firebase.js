// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv9qWsVfNFzpSb6sBzdfKXfHmaiVcF5eA",
    authDomain: "hunger-cs4800.firebaseapp.com",
    databaseURL: "https://hunger-cs4800-default-rtdb.firebaseio.com",
    projectId: "hunger-cs4800",
    storageBucket: "hunger-cs4800.appspot.com",
    messagingSenderId: "411171993439",
    appId: "1:411171993439:web:843e313d845170c26fa8ea",
    measurementId: "G-L8GRX6J8HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
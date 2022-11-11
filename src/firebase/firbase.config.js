// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPv5aDEVXoVZ0s1xf46jvkeyKHVgoYVR8",
    authDomain: "dental-service-care.firebaseapp.com",
    projectId: "dental-service-care",
    storageBucket: "dental-service-care.appspot.com",
    messagingSenderId: "910214346638",
    appId: "1:910214346638:web:b5678339a3cbfe997c56df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
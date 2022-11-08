// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaFaKJG1kpkStHLAjsPGn2eP7UfayhSrk",
    authDomain: "dental-care-services-afaee.firebaseapp.com",
    projectId: "dental-care-services-afaee",
    storageBucket: "dental-care-services-afaee.appspot.com",
    messagingSenderId: "596079884397",
    appId: "1:596079884397:web:e8518d030b27a1971f6764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
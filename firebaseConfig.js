import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseApp={
    apiKey: "AIzaSyD-oQ__6F9xm2WPgtnHWlR79laLA_mav44",
    authDomain: "unniversary-feedback.firebaseapp.com",
    projectId: "unniversary-feedback",
    storageBucket: "unniversary-feedback.appspot.com",
    messagingSenderId: "697243923123",
    appId: "1:697243923123:web:6888e894665e666f26b6c6"
  
};

const app =initializeApp(firebaseApp);
const db = getFirestore();
const auth = getAuth(app);


export { db, auth }



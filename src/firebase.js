import app from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxSG8Gahnjq51b2zC_ls3_g9zZ7qO7YF8",
    authDomain: "showversion1.firebaseapp.com",
    projectId: "showversion1",
    storageBucket: "showversion1.appspot.com",
    messagingSenderId: "33763296382",
    appId: "1:33763296382:web:27867850732f3bb3fb042f",
    measurementId: "G-R0F97PH9H1"
  };
  // Initialize Firebase
app.initializeApp(firebaseConfig);
app.analytics();

const db = app.database();
const auth = app.auth();
const storage = app.storage();

export { db, auth, storage };
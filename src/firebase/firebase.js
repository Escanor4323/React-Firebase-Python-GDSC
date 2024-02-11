import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import for Realtime Database
import { getStorage } from "firebase/storage"; // Import for Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyBIYIdDXdnb-HvEb5XQp3lX1uida91NYkY",
    authDomain: "houses-react-db.firebaseapp.com",
    projectId: "houses-react-db",
    storageBucket: "houses-react-db.appspot.com",
    messagingSenderId: "238157635120",
    appId: "1:238157635120:web:d443483f77fa0210b6d7f5",
    measurementId: "G-MEG36YE15J",
    databaseURL: "https://houses-react-db-default-rtdb.firebaseio.com/" // Add your Realtime Database URL
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database
const storage = getStorage(app); // Initialize Storage

export { app, auth, database, storage };

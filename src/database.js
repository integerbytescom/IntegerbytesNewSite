import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXENg2YOdkGOxhv4WfUzhmtPulThDGFoM",
    authDomain: "integerbytes-website.firebaseapp.com",
    databaseURL: "https://integerbytes-website-default-rtdb.firebaseio.com",
    projectId: "integerbytes-website",
    storageBucket: "integerbytes-website.appspot.com",
    messagingSenderId: "715553928993",
    appId: "1:715553928993:web:95cb85fa165bf801547060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const realtimeDB = getDatabase(app);
export const storageDB = getStorage(app);

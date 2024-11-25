
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use // https://firebase.google.com/docs/web/setup #available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
apiKey: "AIzaSyDw_h6J9oAg_2HdpsDpPtsKIn-v@q0V14M", 
authDomain: "tubeguruji-startups.firebaseapp.com",
projectId: "tubeguruji-startups",
storageBucket: "tubeguruji-startups.appspot.com", 
messagingSenderId: "706430327770",
appId: "1:706438327770:web:08482219ed883a@aad3ee3", 
measurementId: "G-48ZKDR29LV"
};

// Initialize Firebase
export const app = initializeApp (firebaseConfig);
export const db = getFireStore (app);
// const analytics = getAnalytics (app);
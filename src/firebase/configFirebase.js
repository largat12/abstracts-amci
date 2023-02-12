// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAwA9acjXWGImGVoxOqTD9HoiIBmvEqfg",
    authDomain: "abstracts-amci.firebaseapp.com",
    projectId: "abstracts-amci",
    storageBucket: "abstracts-amci.appspot.com",
    messagingSenderId: "1000451629719",
    appId: "1:1000451629719:web:54f9c4cab3718686f23fd2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbApp = getFirestore(app)

export const dbStorage = getStorage(app)
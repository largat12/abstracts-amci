// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// PREPRODUCCION
/*
const firebaseConfig = {
  apiKey: "AIzaSyA1fCcaIhditmM9E7rldWDYSE8W0a5GCNQ",
  authDomain: "pruebas-amci.firebaseapp.com",
  projectId: "pruebas-amci",
  storageBucket: "pruebas-amci.appspot.com",
  messagingSenderId: "863467531242",
  appId: "1:863467531242:web:0ad23efab983e17f5de093"
};
*/

// PRODUCCION

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
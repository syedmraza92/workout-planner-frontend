// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDbVNgipz9XlXOxyOHh2t_qUIEZ4Gr2lOU",
  authDomain: "workout-planner-dff22.firebaseapp.com",
  projectId: "workout-planner-dff22",
  storageBucket: "workout-planner-dff22.appspot.com",
  messagingSenderId: "1047018338363",
  appId: "1:1047018338363:web:63c4e48b80b4b4bdfd041e",
  measurementId: "G-35MDMEEZ70"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};

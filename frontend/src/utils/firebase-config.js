import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey : "AIzaSyBYGJKQgJVnAPFSg7z2UzW_CUouhpUVWlA",
  authDomain: "react-netflix-clone-c8b64.firebaseapp.com",
  projectId: "react-netflix-clone-c8b64",
  storageBucket: "react-netflix-clone-c8b64.appspot.com",
  messagingSenderId: "115028538086",
  appId: "1:115028538086:web:a82d25b13c9fd771d8c127",
  measurementId: "G-SX8QHG04RT"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDY-mHNGgD_1xUohhfbXI_UDmq0WM7pMp4",
  authDomain: "doctor-appointment-e481a.firebaseapp.com",
  projectId: "doctor-appointment-e481a",
  storageBucket: "doctor-appointment-e481a.firebasestorage.app",
  messagingSenderId: "292104215326",
  appId: "1:292104215326:web:dd26c7c0af56511dd8470f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

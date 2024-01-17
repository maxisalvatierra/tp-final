import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhq_UaUhvpCxR1CJtA-esXuGQreQ8PTlA",
  authDomain: "tuti-sandwiches.firebaseapp.com",
  projectId: "tuti-sandwiches",
  storageBucket: "tuti-sandwiches.appspot.com",
  messagingSenderId: "664808554425",
  appId: "1:664808554425:web:35093a6db6ed48863d8068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
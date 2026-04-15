// firebase.js (TEST VERSION)

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

// TEST Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrRER5X0s3X8Ujg2SF-Y3Ihw1YgY9Y77g",
  authDomain: "testowd-ace8e.firebaseapp.com",
  projectId: "testowd-ace8e",
  storageBucket: "testowd-ace8e.firebasestorage.app",
  messagingSenderId: "851263721820",
  appId: "1:851263721820:web:8e2326d9595d1d2ddcb199",
  measurementId: "G-VQJ4FCH1N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services (THIS is what your site actually uses)
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Debug so you KNOW you're on test
console.log("🔥 TEST FIREBASE CONNECTED");

// Export so other files can use it
export { auth, db, storage };

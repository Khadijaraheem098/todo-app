import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC849cMypgKq537XIDd56QuHlX8qfSshbU",
  authDomain: "todo-app-68882.firebaseapp.com",
  databaseURL: "https://todo-app-68882-default-rtdb.firebaseio.com",
  projectId: "todo-app-68882",
  storageBucket: "todo-app-68882.firebasestorage.app",
  messagingSenderId: "724818746666",
  appId: "1:724818746666:web:6b47caed702d04643b9253",
  measurementId: "G-GT4BYC0KB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase();




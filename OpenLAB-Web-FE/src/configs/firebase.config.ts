// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Thêm hàm để làm việc với Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJWc4PlQxvjBiNce4NbPnm7piZU9KP8nk",
  authDomain: "mkadmin-fb19f.firebaseapp.com",
  databaseURL: "https://mkadmin-fb19f-default-rtdb.firebaseio.com",
  projectId: "mkadmin-fb19f",
  storageBucket: "mkadmin-fb19f.appspot.com", // Sửa domain từ firebasestorage.app thành firebasestorage.com
  messagingSenderId: "1004458363740",
  appId: "1:1004458363740:web:6f257ce61151800f3a4f99",
  measurementId: "G-SY9F4MM9XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app); // Kết nối tới Realtime Database

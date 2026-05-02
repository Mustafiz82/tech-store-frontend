
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfPYRNXSGvQEgAn4yga5H2AYj08roHsYE",
  authDomain: "tech-store-frontend.firebaseapp.com",
  projectId: "tech-store-frontend",
  storageBucket: "tech-store-frontend.firebasestorage.app",
  messagingSenderId: "359648255195",
  appId: "1:359648255195:web:6d5f06eb89651383fd80fe"
};


const app = initializeApp(firebaseConfig);
export default app;

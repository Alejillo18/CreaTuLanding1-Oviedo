
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXLmloZ54zjGZ4hjG7krafkPHBA9uiTJw",
  authDomain: "productos-entrega-react.firebaseapp.com",
  projectId: "productos-entrega-react",
  storageBucket: "productos-entrega-react.firebasestorage.app",
  messagingSenderId: "386387643100",
  appId: "1:386387643100:web:c3c35c2390439108bc8219"
};


export const app = initializeApp(firebaseConfig);
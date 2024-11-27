import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHUpknEh5WRkR9jDXW_eHRIrs6ETxEdF4",
  authDomain: "chat-app-demo-at-tkxel.firebaseapp.com",
  projectId: "chat-app-demo-at-tkxel",
  storageBucket: "chat-app-demo-at-tkxel.appspot.com",
  messagingSenderId: "692811385747",
  appId: "1:692811385747:web:0128bc9d51f67d7abbb666",
  measurementId: "G-3M9SM2YJXV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const messagesRef = collection(doc(db, "messages", "Alyssa-Lillian"), "roomMessages");














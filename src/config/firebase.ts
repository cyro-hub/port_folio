import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyB98lXfVhRhsWQcN8qInvPPPSzxcWZPpMI",
//   authDomain: "portfolio-53ca5.firebaseapp.com",
//   projectId: "portfolio-53ca5",
//   storageBucket: "portfolio-53ca5.firebasestorage.app",
//   messagingSenderId: "978094385854",
//   appId: "1:978094385854:web:7bdf7a5c4f5805e4b30cef",
//   measurementId: "G-K0N6824NEM",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBQQmgIuh0GO-6ZKsrMew4UuikSenWXKzU",
  authDomain: "portfolio-62bc6.firebaseapp.com",
  projectId: "portfolio-62bc6",
  storageBucket: "portfolio-62bc6.appspot.com",
  messagingSenderId: "740292556278",
  appId: "1:740292556278:web:e0f21c4b3652620f9dc3d7",
  measurementId: "G-T34Q41RY89",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

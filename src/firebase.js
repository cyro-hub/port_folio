import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
import { getFirestore } from '@firebase/firestore'
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQQmgIuh0GO-6ZKsrMew4UuikSenWXKzU",
    authDomain: "portfolio-62bc6.firebaseapp.com",
    projectId: "portfolio-62bc6",
    storageBucket: "portfolio-62bc6.appspot.com",
    messagingSenderId: "740292556278",
    appId: "1:740292556278:web:e0f21c4b3652620f9dc3d7",
    measurementId: "G-T34Q41RY89"
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app)
// export const auth = getAuth(app);
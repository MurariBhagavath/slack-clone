import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjbAI3xujRyRa6zyk3OXLZkKMCAzirckI",
  authDomain: "slack-clone-c6daa.firebaseapp.com",
  projectId: "slack-clone-c6daa",
  storageBucket: "slack-clone-c6daa.appspot.com",
  messagingSenderId: "583750550868",
  appId: "1:583750550868:web:eadf50c5fa1c1e626534c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

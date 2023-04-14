
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAExHrJcBjx5Z5PCVRG10mD69yC6UQaMV0",
  authDomain: "flechacangreja-aec39.firebaseapp.com",
  projectId: "flechacangreja-aec39",
  storageBucket: "flechacangreja-aec39.appspot.com",
  messagingSenderId: "371551996376",
  appId: "1:371551996376:web:61e4308e1c26dea640caad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db; 
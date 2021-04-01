import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwSjQ-9HeykF-ehnjf5EfAFT2OyvhVkkg",
  authDomain: "slack-react-34062.firebaseapp.com",
  projectId: "slack-react-34062",
  storageBucket: "slack-react-34062.appspot.com",
  messagingSenderId: "1014125124564",
  appId: "1:1014125124564:web:ea331cb039a734c68f5441",
  measurementId: "G-ZC5SL26N3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

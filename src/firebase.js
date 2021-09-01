import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpPFU7VS6kSMvLgH8tJpo8F8_BhyWTdt0",
  authDomain: "discord-clone-18da1.firebaseapp.com",
  projectId: "discord-clone-18da1",
  storageBucket: "discord-clone-18da1.appspot.com",
  messagingSenderId: "783580398870",
  appId: "1:783580398870:web:cf0948e073586477b53c37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


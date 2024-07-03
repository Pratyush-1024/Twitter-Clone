import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtWeInNzrHva58hjyWwDGYDtiZxw39EBE",
    authDomain: "x-clone-5546e.firebaseapp.com",
    projectId: "x-clone-5546e",
    storageBucket: "x-clone-5546e.appspot.com",
    messagingSenderId: "975155126811",
    appId: "1:975155126811:web:65320082b8bbfcfbc34ebe",
    measurementId: "G-2F3TL5J11E"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export default db;
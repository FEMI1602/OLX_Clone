import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDIMQ8WQuustekZaX3RtGVLxpD3e7257YE",
  authDomain: "olx-clone-66175.firebaseapp.com",
  projectId: "olx-clone-66175",
  storageBucket: "olx-clone-66175.appspot.com",
  messagingSenderId: "297820106204",
  appId: "1:297820106204:web:1f01f25054fb1acc14b319",
  measurementId: "G-W5HB2D9ZJB"
};

export default firebase.initializeApp(firebaseConfig)
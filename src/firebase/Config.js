import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-A1dEJSPlK0x2swUOHbNlOy5MjHo9raA",
  authDomain: "olx-clone-5a18d.firebaseapp.com",
  databaseURL:"https://olx-clone-5a18d-default-rtdb.firebaseio.com/",
  projectId: "olx-clone-5a18d",
  storageBucket: "olx-clone-5a18d.appspot.com",
  messagingSenderId: "607912165340",
  appId: "1:607912165340:web:bd7e31cbb97431c59a5919",
  measurementId: "G-NHFPEM7X71"
};

export default firebase.initializeApp(firebaseConfig)
import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAIzUqIfJfeQyL3Fp7CVGzCAvoX4bRSt3k",
  authDomain: "my-library-64ebc.firebaseapp.com",
  projectId: "my-library-64ebc",
  storageBucket: "my-library-64ebc.appspot.com",
  messagingSenderId: "198101637743",
  appId: "1:198101637743:web:25fbdf2da7a39c6e458b9a",
  measurementId: "G-ZDRLT8K980",
};

firebase.initializeApp(config);

export default firebase.firestore();

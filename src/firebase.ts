import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCULiNHidosMATdjOyJs1lJRCMbEXw9Y-Y",
  authDomain: "quiz-app-7a.firebaseapp.com",
  // databaseURL: "https://quiz-app-7a.firebaseio.com",
  projectId: "quiz-app-7a",
  // storageBucket: "quiz-app-7a.appspot.com",
  messagingSenderId: "635288036689",
  appId: "1:635288036689:web:c10f603db4fb2e7c451f70",
};

if (firebase.messaging.isSupported()) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

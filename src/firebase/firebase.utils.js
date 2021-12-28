import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyBU6I6uCcPm9BAqfg6EA1x2hCbRpKEcEsQ",
    authDomain: "ecomm-react-92b7b.firebaseapp.com",
    projectId: "ecomm-react-92b7b",
    storageBucket: "ecomm-react-92b7b.appspot.com",
    messagingSenderId: "952293346794",
    appId: "1:952293346794:web:d5b0e84588ab4f96703693",
    measurementId: "G-4VQHJR7WJE"
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWihGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;
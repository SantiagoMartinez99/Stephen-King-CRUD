import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCYnVB_x_aBmzEtfrYgJkjZfI-PqQ_RnIA",
  authDomain: "stephenking-d3093.firebaseapp.com",
  projectId: "stephenking-d3093",
  storageBucket: "stephenking-d3093.appspot.com",
  messagingSenderId: "750660269897",
  appId: "1:750660269897:web:6c1ce4bcbeec3644954c98",
};

const appFirebase = initializeApp(firebaseConfig);
const authFirebase = getAuth(appFirebase);

export { appFirebase, authFirebase };

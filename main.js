import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "<API-KEY>",
  databaseURL: "<DATABASE-URL>",
};

initializeApp(firebaseConfig);
const auth = getAuth();

signInAnonymously(auth)
  .then(() => {
    console.log("It works!")
  })
  .catch((error) => {
    console.log("Oh no ...");
    console.log(error.code + ": " + error.message);
  });

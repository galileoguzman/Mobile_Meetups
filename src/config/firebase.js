import * as firebase from 'firebase';

export const firebaseApp = firebase.initializaApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_ID",
    storageBucket: "",
    messagingSenderId: ""
})

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export default firebase;

import firebase from "firebase";


var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD9H50uYwIxiUySdkqOOtTyJq5Y9iPT2dM",
    authDomain: "movies-app-148c2.firebaseapp.com",
    projectId: "movies-app-148c2",
    storageBucket: "movies-app-148c2.appspot.com",
    messagingSenderId: "489849834236",
    appId: "1:489849834236:web:747f53c63e7b2046e6a579"
});

var db = firebaseApp.firestore();

export { db };

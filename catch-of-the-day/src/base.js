import Rebase from 're-base'; 
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtKRrORlt3UQ4xNkYo4HVdtUeVLdWnLZ0",
    authDomain: "catch-of-the-day-f128a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-f128a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export{ firebaseApp };

// this is a default export
export default base;
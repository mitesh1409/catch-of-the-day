import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBl0RsS_RoyWJ6XWgs9l8ZXgbzW1BE0kGw",
    authDomain: "catch-of-the-day-mitesh.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mitesh-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Create a rebase object.
const rebase = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is the default export.
export default rebase;

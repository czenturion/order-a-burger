import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC60z2rlD5SSg6s5_nvTW4Dup4RBCB-FKY",
    authDomain: "very-hot-burgers-2955d.firebaseapp.com",
    databaseURL:
        "https://very-hot-burgers-2955d-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;

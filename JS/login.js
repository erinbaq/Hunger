// Import the functions you need from the SDKs you need

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
const auth = getAuth();


if (firebase.apps.length === 0) {
    firebase.initializeApp({});
}

sighUp.addEventListener('click',(e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid),{
                username: username,
                email: email
            })

            alert('user created!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
        });

});

login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid),{
                last_login: dt,
            })

            alert('User logged in!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        //bla bla bla
        // ...
    } else {
        // User is signed out
        // ...
        //bla bla bla
    }
});

logout.addEventListener('click',(e)=>{

    signOut(auth).then(() => {
        // Sign-out successful.
        alert('user logged out');
    }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });

});
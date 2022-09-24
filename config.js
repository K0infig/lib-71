import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB-uq8Z__hzlC-Tw-nzKO5aWklz5kLPQwQ",
    authDomain: "anaad-lib.firebaseapp.com",
    projectId: "anaad-lib",
    storageBucket: "anaad-lib.appspot.com",
    messagingSenderId: "180516995213",
    appId: "1:180516995213:web:9a4dd1434bb0516201a2c4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDgulu4s1a1HOItjgm2JpsF0E3R5BLhv8I",
    authDomain: "fcm-abdou.firebaseapp.com",
    projectId: "fcm-abdou",
    storageBucket: "fcm-abdou.appspot.com",
    messagingSenderId: "646128985712",
    appId: "1:646128985712:web:5f1ddd66055620a601b6b5",
    measurementId: "G-E191CHS7EG"
})

const messaging = firebase.messaging();
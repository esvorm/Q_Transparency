// Initialize Firebase
var config = {
	apiKey: "AIzaSyBrC0YHoU-rNu-sTfJPsPRPmzzDJPFUjH0",
    authDomain: "what-s-great-about-iphon-d2433.firebaseapp.com",
    databaseURL: "https://what-s-great-about-iphon-d2433.firebaseio.com",
    projectId: "what-s-great-about-iphon-d2433",
    storageBucket: "what-s-great-about-iphon-d2433.appspot.com",
    messagingSenderId: "737261827526"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
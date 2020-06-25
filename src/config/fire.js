import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAVJNcVdctGSUV-Z2EkVHdz68_BdBQpU7g",
    authDomain: "login-signup-fd532.firebaseapp.com",
    databaseURL: "https://login-signup-fd532.firebaseio.com",
    projectId: "login-signup-fd532",
    storageBucket: "login-signup-fd532.appspot.com",
    messagingSenderId: "29754806634",
    appId: "1:29754806634:web:ca4262b6c60944d0821513"
  };


  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;


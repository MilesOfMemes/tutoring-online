import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfb0rUOCyqjQ4OvgKBdNsze_8qRnEFv0Q",
    authDomain: "simple-user-login-screen.firebaseapp.com",
    projectId: "simple-user-login-screen",
    storageBucket: "simple-user-login-screen.appspot.com",
    messagingSenderId: "740450830627",
    appId: "1:740450830627:web:5e88798aeb47b249832496"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
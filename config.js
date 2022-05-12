import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAoabEWIJoTPDPr-fGrunZL7m7ZazVFW2o",
  authDomain: "attendence-aef85.firebaseapp.com",
  databaseURL: "https://attendence-aef85-default-rtdb.firebaseio.com",
  projectId: "attendence-aef85",
  storageBucket: "attendence-aef85.appspot.com",
  messagingSenderId: "107328703830",
  appId: "1:107328703830:web:64f3197e7cc592810ddaf7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database()
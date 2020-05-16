import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCfX6o0IL3YwBGukvE_nOhatJspfrMUCBA",
    authDomain: "mentalhealthfirst-255be.firebaseapp.com",
    databaseURL: "https://mentalhealthfirst-255be.firebaseio.com",
    projectId: "mentalhealthfirst-255be",
    storageBucket: "mentalhealthfirst-255be.appspot.com",
    messagingSenderId: "770788469571",
    appId: "1:770788469571:web:07ae238250148e50681df6",
    measurementId: "G-VN6PCZSED3"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
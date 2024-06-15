Firebase.js
import firebase from 'firebase/compat/app';  import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
apiKey: "AIzaSyAY1JSsb9SkcuWsPsDjvNUGIu0AtlRSBrE",  authDomain: "software-piracy-system.firebaseapp.com",  projectId: "software-piracy-system",
storageBucket: "software-piracy-system.appspot.com",
messagingSenderId: "752626835697",
appId: "1:752626835697:web:9791522e34d3aea83a0950",
measurementId: "G-S6JJTXDQ2V"
};
const fire = firebase.initializeApp(firebaseConfig);  export default fire;

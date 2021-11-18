import firebase from "firebase/app";
import '@firebase/firestore';

// Your web app's Firebase configuration
const app = {
  apiKey: "AIzaSyDYk6VnXbZLJSyG6JVP0EfcxUyNjfBA-30",
  authDomain: "maimo-commerce-sofi.firebaseapp.com",
  projectId: "maimo-commerce-sofi",
  storageBucket: "maimo-commerce-sofi.appspot.com",
  messagingSenderId: "632670397091",
  appId: "1:632670397091:web:5d6749a25006a7d65b5516"
};

if (!firebase.apps.length) {
    firebase.initializeApp(app);
  }

const getFirebase = () => app;

const getFirestore = () => firebase.firestore();

const getDate = () => firebase.firestore.Timestamp.fromDate(new Date())

export { getFirebase, getFirestore, getDate };
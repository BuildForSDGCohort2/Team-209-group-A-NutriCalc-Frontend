import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAPlp8cdax4s5bm8NifmmcVW8AoJVGQby8",
  authDomain: "nutricalc-dca46.firebaseapp.com",
  databaseURL: "https://nutricalc-dca46.firebaseio.com",
  projectId: "nutricalc-dca46",
  storageBucket: "nutricalc-dca46.appspot.com",
  messagingSenderId: "375679745437",
  appId: "1:375679745437:web:08ef675f8ed19509768374",
  measurementId: "G-KZZLP7LBBZ",
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const provider = new firebase.auth.FacebookAuthProvider()

export {provider,auth}
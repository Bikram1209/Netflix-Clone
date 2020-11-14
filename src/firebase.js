import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcTBOfwJDJ9cOx-kdH-GsbQyPtkcBSZQ0",
  authDomain: "netflix-web-clone-bjsk.firebaseapp.com",
  databaseURL: "https://netflix-web-clone-bjsk.firebaseio.com",
  projectId: "netflix-web-clone-bjsk",
  storageBucket: "netflix-web-clone-bjsk.appspot.com",
  messagingSenderId: "788990205705",
  appId: "1:788990205705:web:708fb03ca0937bcb1a7dd8",
  measurementId: "G-DDRJ7C404Q",
};

const netflixApp = firebase.initializeApp(firebaseConfig);

const auth = netflixApp.auth();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, facebookAuthProvider };

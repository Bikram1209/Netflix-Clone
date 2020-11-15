import firebase from "firebase";

const firebaseConfig = {
  // your app cofig goes here
};

const netflixApp = firebase.initializeApp(firebaseConfig);

const auth = netflixApp.auth();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, facebookAuthProvider };

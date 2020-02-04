import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB3QKn3wWwCmbd7NccjF-DT3YhtXSHAKCE",
  authDomain: "split-f7881.firebaseapp.com",
  databaseURL: "https://split-f7881.firebaseio.com",
  projectId: "split-f7881",
  storageBucket: "split-f7881.appspot.com",
  messagingSenderId: "725396944439",
  appId: "1:725396944439:web:2ac3df711c9b8379c131b2",
  measurementId: "G-H4SR5FXSL0"
};

class _Users {
  initialize() {
    firebase.initializeApp(firebaseConfig);
  }

  async createUserWithEmailAndPassword(email, password) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  async signInWithEmailAndPassword(email, password) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async sendPasswordResetEmail(email) {
    return await firebase.auth().sendPasswordResetEmail(email);
  }
}

const Users = new _Users();

export default Users;

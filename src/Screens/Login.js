//https://www.youtube.com/watch?v=pNZks2j2Qaw

import React from "react";
import { Alert, StyleSheet } from "react-native";
import * as firebase from "firebase";

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const Login = props => {
  const onForgotPassword = email => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
    // Alert.alert("No, I did not forgot my password.");
  };

  const onCreateNewAccount = () => {
    props.navigation.navigate("NewAccount");
  };

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          props.navigation.navigate("BottomNav");
        },
        error => {
          Alert.alert(error.message);
        }
      );

    //Alert.alert("email: " + email + ", password: " + password);
  };

  props.navigation.setOptions({ headerLeft: null, headerRight: null });
  return (
    <BackgroundFrame>
      <AccountPrompt
        onButtonLogin={onLogin}
        onCreateNewAccount={onCreateNewAccount}
        onForgotPassword={onForgotPassword}
      />
    </BackgroundFrame>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%"
  }
});

export default Login;

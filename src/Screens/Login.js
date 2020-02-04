//https://www.youtube.com/watch?v=pNZks2j2Qaw

import React from "react";
import { Alert, StyleSheet } from "react-native";
import Users from "../backend/UsersApi";

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const Login = props => {
  const onForgotPassword = email => {
    props.navigation.navigate("ForgotPassword");
    // Alert.alert("No, I did not forgot my password.");
  };

  const onCreateNewAccount = () => {
    props.navigation.navigate("NewAccount");
  };

  const onLogin = (email, password) => {
    // props.navigation.navigate("SendInvite");
    // try {
    //   await Users.signInWithEmailAndPassword(email, password);
    //   props.navigation.navigate("BottomNav");
    // } catch (error) {
    //   Alert.alert(error.message);
    // }

    Users.signInWithEmailAndPassword(email, password).then(
      () => {
        props.navigation.navigate("BottomNav");
      },
      error => {
        Alert.alert(error.message);
      }
    );
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

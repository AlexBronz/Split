import React from "react";
import { Alert, StyleSheet } from "react-native";
//import { BackgroundFrame } from "expo-linear-gradient";

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const Login = props => {
  const onForgotPassword = () => {
    Alert.alert("No, I did not forgot my password.");
  };

  const onCreateNewAccount = () => {
    props.navigation.navigate("NewAccount");
  };

  const onLogin = () => {
    Alert.alert("Sure, I'll Login!");
  };

  props.navigation.setOptions({ headerLeft: null, headerRight: null });
  return (
    <BackgroundFrame>
      <AccountPrompt
        onButtonPress={onLogin}
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

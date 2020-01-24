import React from "react";
import { Alert } from "react-native";
import * as firebase from "firebase";

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const CreateAccount = ({ navigation }) => {
  navigation.setOptions({ headerLeft: null, headerRight: null });

  const onCancel = () => {
    navigation.navigate("Login");
  };

  const onCreateAccount = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          navigation.navigate("BottomNav");
        },
        error => {
          Alert.alert(error.message);
        }
      );
    // navigation.navigate("SendInvite");
  };

  return (
    <BackgroundFrame>
      <AccountPrompt
        onButtonLogin={onCreateAccount}
        isCreateAccount={true}
        onCreateNewAccount={onCancel}
      />
    </BackgroundFrame>
  );
};

export default CreateAccount;

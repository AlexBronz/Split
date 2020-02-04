import React from "react";
import Users from '../backend/UsersApi'

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const CreateAccount = ({ navigation }) => {
  navigation.setOptions({ headerLeft: null, headerRight: null });

  const onCancel = () => {
    navigation.navigate("Login");
  };

  const onCreateAccount = async (email, password) => {
    try {
      await Users.createUserWithEmailAndPassword(email, password);
      navigation.navigate("BottomNav");
    } catch (error) {
      Alert.alert(error.message);
    }
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

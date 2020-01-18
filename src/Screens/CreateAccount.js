import React from "react";

import AccountPrompt from "../components/AccountPrompt";
import BackgroundFrame from "../components/BackgroundFrame";

const CreateAccount = ({ navigation }) => {
  navigation.setOptions({ headerLeft: null, headerRight: null });

  const onCancel = () => {
    navigation.navigate("Login");
  };

  const onCreateAccount = () => {
    navigation.navigate("SendInvite");
  };

  return (
    <BackgroundFrame>
      <AccountPrompt
        onButtonPress={onCreateAccount}
        isCreateAccount={true}
        onCreateNewAccount={onCancel}
      />
    </BackgroundFrame>
  );
};

export default CreateAccount;

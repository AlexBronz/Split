import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeIconFrame from "../components/HomeIconFrame";
import CustomButton from "../components/CustomButton";

const SendInvite = ({ navigation }) => {
  navigation.setOptions({ headerLeft: null });

  const onInvite = () => {
    navigation.navigate("JoinGroup");
  };
  return (
    <HomeIconFrame
      title='Send Invite'
      subTitle='Apartment Rent:'
      showProfile={false}
    >
      <View style={styles.container}>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>XFG-456</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>
            Share this code with the people you want to split your payment
          </Text>
        </View>
        <CustomButton onPress={onInvite} title='Send Invite' />
      </View>
    </HomeIconFrame>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "6.75%"
  },
  codeContainer: {},
  code: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold"
  },
  instructionContainer: {
    marginBottom: "6%",
    width: "69%",
    justifyContent: "center",
    alignItems: "center"
  },
  instruction: {
    fontSize: 14,
    color: "#fff",
    textAlignVertical: "center",
    textAlign: "center"
  },
  buttonContainer: {}
});

export default SendInvite;

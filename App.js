import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
//import { Button } from "native-base";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/Screens/Login";
import CreateAccount from "./src/Screens/CreateAccount";
import SendInvite from "./src/Screens/SendInvite";
import JoinGroup from "./src/Screens/JoinGroup";
import EnterAmount from "./src/Screens/EnterAmount";
import BottomNav from "./src/Screens/BottomNav";

const Stack = createStackNavigator();
export default function App() {
  //headerMode='none'
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={options} />
        <Stack.Screen
          name='NewAccount'
          component={CreateAccount}
          options={options}
        />
        <Stack.Screen
          name='SendInvite'
          component={SendInvite}
          options={options}
        />
        <Stack.Screen
          name='JoinGroup'
          component={JoinGroup}
          options={options}
        />
        <Stack.Screen
          name='EnterAmount'
          component={EnterAmount}
          options={options}
        />
        <Stack.Screen
          name='BottomNav'
          component={BottomNav}
          options={options}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const options = ({ navigation }) => ({
  title: "",
  headerTransparent: true,
  headerStyle: null,
  headerLeft: onPress => (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.pop();
      }}
    >
      <View
        style={{ flex: 1, marginTop: 7, paddingLeft: 0, flexDirection: "row" }}
      >
        <View>
          <Icon name='chevron-left' size={40} />
        </View>
        <Text style={{ paddingTop: 11, marginLeft: -10 }}>Back</Text>
      </View>
    </TouchableWithoutFeedback>
  ),
  headerRight: onPress => (
    <Text
      style={{ paddingRight: 16 }}
      onPress={() => {
        navigation.popToTop();
      }}
    >
      Cancel
    </Text>
  ),
  headerTitleStyle: {
    fontWeight: "bold"
  }
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import CustBtn from "../components/CustBtn";
import CustInput from "../components/CustInput";
import CustText from "../components/CustText";
import { modifiers, colors } from "../utils/theme";
import Header from "../components/Header";
import { showToast } from "../components/Toast";
import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore/lite";

function Register({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setUserConfirmPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };
  const handleShowConfPass = () => {
    if (showConfPass === true) {
      setShowConfPass(false);
    } else if (showConfPass === false) {
      setShowConfPass(true);
    }
  };
  const handleRegisterPress = () => {
    console.log(
      userName,
      userEmail,
      userPassword,
      userConfirmPassword,
      phoneNo
    );
    //firebase integration @version 10.0.0
    addDoc(collection(db, "users"), {
      user_name: userName,
      user_email: userEmail,
      password: userPassword,
      confPassword: userConfirmPassword,
      phone: phoneNo,
    });
    showToast(
      "success",
      "You have been registered. Please proceed to login",
      "top"
    );
    navigation.navigate("Login");
  };
  const handleAlreadyLoginPress = () => {
    navigation.navigate("Login");
  };
  const handleBackIconPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: colors.bgColor }}
    >
      <KeyboardAvoidingView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bgColor,
        }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={90}
      ></KeyboardAvoidingView>
      <View style={styles.container}>
        <Header title={"Register"} onIconPress={handleBackIconPress} />
        <View style={styles.container}>
          <CustInput
            placeholder={"User Name"}
            showIcon={true}
            iconName={"person-circle"}
            onChange={setUserName}
          />
          <CustInput
            placeholder="E-Mail"
            showIcon={true}
            iconName={"mail-outline"}
            onChange={setUserEmail}
          />
          <CustInput
            placeholder="Password"
            isSecure={!showPass}
            showIcon={true}
            iconName={showPass === false ? "eye-outline" : "eye-off-outline"}
            onIconPress={handleShowPass}
            onChange={setUserPassword}
          />
          <CustInput
            placeholder=" Confirm Password"
            isSecure={!showConfPass}
            showIcon={true}
            iconName={
              showConfPass === false ? "eye-outline" : "eye-off-outline"
            }
            onIconPress={handleShowConfPass}
            onChange={setUserConfirmPassword}
          />
          <CustInput
            keypadType={"phone-pad"}
            placeholder={"Phone Number"}
            iconName={"call-sharp"}
            onChange={setPhoneNo}
          />
          <CustText
            textTitle={"Already Registered? Then Login"}
            onTextPressed={handleAlreadyLoginPress}
          />
          <CustBtn title="Register" onButtonPress={handleRegisterPress} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85cf58",
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
});

export default Register;

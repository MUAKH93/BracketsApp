import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustBtn from "../components/CustBtn";
import CustInput from "../components/CustInput";
import { showToast } from "../components/Toast";
import CustText from "../components/CustText";
import { modifiers, colors } from "../utils/theme";
import Header from "../components/Header";
import { db } from "../services/firebaseConfig";
import { collection, getDoc } from "firebase/firestore/lite";

function Login({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };
  const handleLoginPress = () => {
     const getDocData = getDoc(userEmail, userPassword);
      //user_email: userEmail,
      //password: userPassword,
      if(getDocData.exists()){
        const docData = getDocData.data();
      }
    };
    console.log(getDocData);
    //showToast("success", "You are successfully Signed In", "top");
    //navigation.navigate("Home");
  };
  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };
  const handleBackIconPress = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: colors.bgColor }}
    >
      <Header title={"Login"} onIconPress={handleBackIconPress} />
      <View style={styles.container}>
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
        <CustText
          textTitle={"Not Registered? Registered First"}
          onTextPressed={handleRegisterPress}
        />
        <CustBtn title="Login" onButtonPress={handleLoginPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#85cf58",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
});

export default Login;

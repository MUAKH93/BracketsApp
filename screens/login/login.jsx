import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustBtn from "../components/CustBtn";
import CustInput from "../components/CustInput";
import { showToast } from "../components/Toast";
import CustText from "../components/CustText";

function Login({ navigation }) {
  const handleLoginPress = () => {
    showToast("success", "You are successfully Signed In", "top");
    navigation.navigate("Home");
  };
  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.tilteText}>Login</Text>
      </View>
      <CustInput placeholder="E-Mail" />
      <CustInput placeholder="Password" isSecure={true} />
      <CustText
        textTitle={"Not Registered? => Registered First"}
        onTextPressed={handleRegisterPress}
      />
      <CustBtn title="Login" onButtonPress={handleLoginPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85cf58",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    margin: 10,
    backgroundColor: "#58fc85",
    width: 140,
    height: 60,
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#619261",
  },
  title: {
    marginBottom: 100,
    marginTop: 0,
    backgroundColor: "#58fc85",
    width: 150,
    height: 50,
    borderRadius: 5,
    borderColor: "#917181",
    alignItems: "center",
    justifyContent: "center",
  },
  tilteText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;

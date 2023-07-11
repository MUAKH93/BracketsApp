import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustBtn from "../components/CustBtn";

function Register({ navigation }) {
  const handleRegisterPress = () => {
    navigation.navigate("Login");
  };
  const handleHomePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.tilteText}>Register</Text>
      </View>
      <CustBtn title="Home" onButtonPress={handleHomePress} />
      <TouchableOpacity style={styles.btn} onPress={handleRegisterPress}>
        <Text style={styles.btnText}>Go to Login</Text>
      </TouchableOpacity>
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
    width: 200,
    height: 100,
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

export default Register;

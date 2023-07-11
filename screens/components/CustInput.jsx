import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { modifiers } from "../utils/theme";

function CustInput({
  placeholder = placeholder,
  onChange,
  isSecure,
  //showIcon,
  //iconName,
  //onIconPress,
  keypadType,
}) {
  return (
    <View style={styles.inputCon}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={isSecure}
        keyboardType={keypadType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "95%",
  },
  inputCon: {
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 10,
    borderRadius: 5,
    marginVertical: modifiers.itemMargin,
    flexDirection: "row",
  },
});

export default CustInput;

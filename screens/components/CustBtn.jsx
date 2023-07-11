import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { modifiers, colors } from "../utils/theme";

function CustBtn({ title = "title", bgColor = colors.primary, onButtonPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bgColor }]}
      onPress={onButtonPress}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    height: 50,
    width: "90 %",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: modifiers.itemMargin,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CustBtn;

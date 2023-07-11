import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { modifiers, colors } from "../utils/theme";

function CustText({ onTextPressed, textTitle }) {
  return (
    <TouchableOpacity onPress={onTextPressed} style={styles.textBtnCon}>
      <Text style={StyleSheet.titleTextCon}>{textTitle}</Text>
    </TouchableOpacity>
  );
}

export default CustText;

const styles = StyleSheet.create({
  textBtnCon: {
    height: 30,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: modifiers.containerPadding,
    flexDirection: "row",
  },
  textTitleCon: {
    fontWeight: "medium",
  },
  backIcon: {
    marginLeft: 10,
  },
});

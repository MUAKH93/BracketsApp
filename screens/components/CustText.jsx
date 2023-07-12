import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { modifiers, colors } from "../utils/theme";

function CustText({ onTextPressed, textTitle }) {
  return (
    <TouchableOpacity onPress={onTextPressed} style={styles.textBtnCon}>
      <Text style={StyleSheet.titleTextCon}>
        {textTitle}
        <Ionicons
          name={"arrow-forward"}
          size={24}
          style={styles.backIcon}
          color={colors.primary}
        />
      </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

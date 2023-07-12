import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { modifiers } from "../utils/theme";

function Header({ title, onIconPress }) {
  return (
    <View style={styles.headerCon}>
      <Ionicons
        name={"chevron-back"}
        size={24}
        style={styles.backIcon}
        onPress={onIconPress}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerCon: {
    //paddingHorizontal: modifiers.containerPadding,
    height: 100,
    width: "100%",
    marginBottom: 30,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#85cf58",
  },
  title: {
    paddingHorizontal: modifiers.containerPadding,
    fontSize: 34,
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#85cf58",
  },
  backIcon: {
    paddingHorizontal: modifiers.containerPadding,
    marginTop: 40,
    margin: 20,
    marginLeft: 0,
  },
});

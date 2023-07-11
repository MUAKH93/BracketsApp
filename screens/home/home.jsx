import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../utils/theme";

import CustBtn from "../components/CustBtn";

function Home({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleFirstPress = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoTitleCon}>
        <Image
          source={require("../../assets/jajjaAcademyLogo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.titleText}>Jajja Academy</Text>
        <Text style={styles.sloganText}>Since 1970</Text>
      </View>
      <CustBtn title="Go Back" onButtonPress={handleBackPress} />
      <CustBtn
        title="Go Back to First Screen"
        onButtonPress={handleFirstPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoTitleCon: {
    backgroundColor: colors.whitish,
    width: "100%",
    height: 120,
  },
  logoImg: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 50,
    borderRadius: 25,
  },
  titleText: {
    margin: 50,
    marginBottom: 0,
    padding: 5,
    paddingLeft: 20,
    marginLeft: 100,
    backgroundColor: colors.whitish,
    width: 200,
    height: 40,
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    borderRadius: 15,
  },
  sloganText: {
    fontSize: 14,
    textAlign: "center",
    marginLeft: 120,
    marginTop: 0,
  },
});

export default Home;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import bgApp from "../assets/image/bg.jpg";

const heightApp = Dimensions.get("screen").height;
const widthApp = Dimensions.get("screen").width;

const Welcome = ({ navigation }) => {
  // routes button
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  // Welcome interface
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={bgApp}
        resizeMode="contain"
        style={{
          width: widthApp,
          height: heightApp / 1.5,
          alignSelf: "center",
          // marginTop: 40,
        }}
      />
      <View style={{ position: "absolute", bottom: "20%", left: 20 }}>
        <Text
          style={{
            fontSize: 35,
            width: 250,
            color: "white",
            fontWeight: "bold",
            textShadowColor: "#FF7396",
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            textShadowRadius: 7,
          }}
        >
          Welcome to June Food
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <TouchableOpacity
            onPress={goToLogin}
            style={{
              marginRight: 20,
              paddingVertical: 10,
              paddingHorizontal: 30,
              backgroundColor: "#FF7396",
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "500", margin: 0 }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 20,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderWidth: 2,
              borderColor: "#FF7396",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#FF7396", fontWeight: "500", margin: 0 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 5, color: "gray" }}>
            Review app please click here
          </Text>
          <TouchableOpacity onPress={goToHome}>
            <Text style={{ color: "#FF7396" }}>Let'go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

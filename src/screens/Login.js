import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import bgApp from "../assets/image/bg.jpg";
import userIcon from "../assets/icon/user.png";
import closeIcon from "../assets/icon/close.png";
import passwordIcon from "../assets/icon/password.png";
import eyeIcon from "../assets/icon/eye.png";
import eyeHiddenIcon from "../assets/icon/eyehidden.png";
const Login = ({ navigation }) => {
  // route
  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  // useState Change TextInput
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  // listen change text Input

  const changeTextUsername = (val) => {
    setusername(val);
  };

  const changeTextPassword = (val) => {
    setPassword(val);
  };

  // delete text on TextInput

  const deleteTextInput = () => {
    setusername("");
  };

  // change secure
  const changeSecure = () => {
    setSecure(!secure);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-120}
    >
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Image
          source={bgApp}
          resizeMode="cover"
          style={{
            width: 350,
            height: 350,
            alignSelf: "center",
            marginTop: 40,
          }}
        />
        <View
          style={{ position: "absolute", left: 20, bottom: "20%", right: 20 }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
              textShadowColor: "#FF7396",
              textAlign: username.length > 0 ? "left" : "center",
              textShadowOffset: {
                width: 2,
                height: 2,
              },
              textShadowRadius: 7,
            }}
          >
            Login
          </Text>
          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              User name
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Image
                source={userIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                  tintColor: "#FF7396",
                }}
              />
              <TextInput
                placeholder="Ex: TuanNguyen"
                style={{ flex: 1 }}
                value={username}
                onChangeText={changeTextUsername}
              />
              <TouchableOpacity
                style={{ display: username.length > 1 ? "flex" : "none" }}
                onPress={deleteTextInput}
              >
                <Image
                  source={closeIcon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: "lightgray",
                    marginHorizontal: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* password */}

          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Image
                source={passwordIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                  tintColor: "#FF7396",
                }}
              />
              <TextInput
                placeholder="Ex: TuanNguyen"
                style={{ flex: 1 }}
                value={password}
                onChangeText={changeTextPassword}
                secureTextEntry={secure}
              />
              <TouchableOpacity
                style={{ display: password.length > 1 ? "flex" : "none" }}
                onPress={changeSecure}
              >
                <Image
                  source={secure ? eyeHiddenIcon : eyeIcon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "lightgray",
                    marginHorizontal: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* button  */}

          <TouchableOpacity
            onPress={goToHome}
            style={{
              marginTop: 20,
              alignSelf: "center",
              paddingVertical: 10,
              width: 130,
              borderRadius: 20,
              backgroundColor: "#FF7396",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          {/* sign up */}

          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "gray", marginBottom: 10, textAlign: "center" }}
            >
              Nếu bạn chưa có tài khoản thì đăng ký tại đây
            </Text>
            <TouchableOpacity onPress={goToSignup}>
              <Text style={{ textAlign: "center", color: "#FF7396" }}>
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});

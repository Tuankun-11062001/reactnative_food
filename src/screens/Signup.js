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
import phoneIcon from "../assets/icon/phone.png";

const Signup = ({ navigation }) => {
  // route
  const goToLogin = () => {
    navigation.goBack();
  };

  // useState Change TextInput
  const [username, setusername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [securePasword, setSecurePassword] = useState(true);
  const [secureRePassword, setSecureRePassword] = useState(true);

  // listen change text Input

  const changeTextUsername = (val) => {
    setusername(val);
  };

  const changeTextPhone = (val) => {
    setPhone(val);
  };

  const changeTextPassword = (val) => {
    setPassword(val);
  };
  const changeTextRePassword = (val) => {
    setRePassword(val);
  };

  // delete text on TextInput

  const deleteTextInputUser = () => {
    setusername("");
  };

  const deleteTextInputPhone = () => {
    setPhone("");
  };

  // change secure
  const changeSecurePassword = () => {
    setSecurePassword(!securePasword);
  };

  const changeSecureRePassword = () => {
    setSecureRePassword(!secureRePassword);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -700}
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
          style={{ position: "absolute", left: 20, bottom: "10%", right: 20 }}
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
            Đăng ký
          </Text>
          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              Tên đăng nhập
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
                onPress={deleteTextInputUser}
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

          {/* numberPhone */}

          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              Số điện thoại
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
                source={phoneIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                  tintColor: "#FF7396",
                }}
              />
              <TextInput
                placeholder="Ex: 0826901362"
                style={{ flex: 1 }}
                value={phone}
                onChangeText={changeTextPhone}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={{ display: password.length > 1 ? "flex" : "none" }}
                onPress={deleteTextInputPhone}
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

          {/* Password */}

          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              Mật khẩu
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
                secureTextEntry={securePasword}
              />
              <TouchableOpacity
                style={{ display: password.length > 1 ? "flex" : "none" }}
                onPress={changeSecurePassword}
              >
                <Image
                  source={securePasword ? eyeHiddenIcon : eyeIcon}
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

          {/* Re-Password */}

          <View style={{ width: "100%", marginTop: 10 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: "gray",
              }}
            >
              Nhập lại mật khẩu
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
                value={rePassword}
                onChangeText={changeTextRePassword}
                secureTextEntry={secureRePassword}
              />
              <TouchableOpacity
                style={{ display: rePassword.length > 1 ? "flex" : "none" }}
                onPress={changeSecureRePassword}
              >
                <Image
                  source={rePassword ? eyeHiddenIcon : eyeIcon}
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

          {/* button sign up */}

          <TouchableOpacity
            style={{
              marginTop: 20,
              alignSelf: "center",
              paddingVertical: 10,
              width: 130,
              borderRadius: 20,
              backgroundColor: "#FF7396",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Đăng Ký</Text>
          </TouchableOpacity>

          {/* login */}

          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "gray", marginBottom: 10, textAlign: "center" }}
            >
              Nếu bạn đã có tài khoản thì đăng nhập tại đây
            </Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={{ textAlign: "center", color: "#FF7396" }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({});

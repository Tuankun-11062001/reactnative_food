import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import menuIcon from "../assets/icon/menu.png";
import youtubeIcon from "../assets/icon/youtube.png";
import instagramIcon from "../assets/icon/instagram.png";
import facebookIcon from "../assets/icon/facebook.png";
import cartIcon from "../assets/icon/cart.png";
import favouriteIcon from "../assets/icon/favourite.png";
import arrowRightIcon from "../assets/icon/arrowRight.png";
import { useNavigation } from "@react-navigation/native";

const widthApp = Dimensions.get("screen").width;
const heightApp = Dimensions.get("screen").height;

const User = () => {
  const navigation = useNavigation();

  // open drawer
  const drawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "ios" ? 0 : 25,
          backgroundColor: "#FF7396",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            paddingVertical: 35,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={drawer}
            style={{
              position: "absolute",
              left: 20,
            }}
          >
            <Image
              source={menuIcon}
              style={{ width: 30, height: 30, tintColor: "#fff" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}>
            User
          </Text>
        </View>
      </SafeAreaView>

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginRight: 5,
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "#FF7396",
              padding: 10,
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1670355548794-18c0505584b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                alignSelf: "center",
              }}
              resizeMode="cover"
            />
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#222",
                }}
              >
                Elfa
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "#777",
                }}
              >
                I love cooking and shoping
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  height: 70,
                  borderRadius: 10,
                  marginRight: 5,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#FF7396",
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  source={youtubeIcon}
                  style={{ width: 20, height: 20, tintColor: "#FF7396" }}
                />
                <Text style={{ marginTop: 5, fontSize: 12, color: "#777" }}>
                  Youtube
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 70,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginLeft: 5,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#FF7396",
                }}
              >
                <Image
                  source={instagramIcon}
                  style={{ width: 20, height: 20, tintColor: "#FF7396" }}
                />
                <Text style={{ marginTop: 5, fontSize: 12, color: "#777" }}>
                  Instagram
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  height: 70,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginRight: 5,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#FF7396",
                }}
              >
                <Image
                  source={facebookIcon}
                  style={{ width: 20, height: 20, tintColor: "#FF7396" }}
                />
                <Text style={{ marginTop: 5, fontSize: 12, color: "#777" }}>
                  Facebook
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 70,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginLeft: 5,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#FF7396",
                }}
              >
                <Image
                  source={instagramIcon}
                  style={{ width: 20, height: 20, tintColor: "#FF7396" }}
                />
                <Text style={{ marginTop: 5, fontSize: 12, color: "#777" }}>
                  Twitter
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FF7396",
              marginRight: 5,
              height: 70,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={cartIcon}
              style={{ width: 30, height: 30, tintColor: "#fff" }}
              resizeMode="contain"
            />
            <Text style={{ color: "#fff" }}>Has Bought</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FF7396",
              marginRight: 5,
              height: 70,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={favouriteIcon}
              style={{ width: 30, height: 30, tintColor: "#fff" }}
              resizeMode="contain"
            />
            <Text style={{ color: "#fff" }}>Favourite</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ flex: 1 }}>Setting account</Text>
          <Image
            source={arrowRightIcon}
            style={{ width: 15, height: 15, tintColor: "#777" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});

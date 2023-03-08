import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import faceBookIcon from "../assets/icon/facebook.png";
import youtubeIcon from "../assets/icon/youtube.png";
import instagramIcon from "../assets/icon/instagram.png";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: "#FF7396", padding: 10 }}>
          {/* <TouchableOpacity
            style={{
              marginTop: 60,
              paddingHorizontal: 10,
              paddingVertical: 10,
              backgroundColor: "white",
              borderRadius: 20,
              marginLeft: 10,
              width: 100,
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>Login</Text>
          </TouchableOpacity> */}
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="cover"
              style={{
                width: 70,
                height: 70,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#fff",
              }}
              source={{
                uri: "https://images.unsplash.com/photo-1668957714470-e5b8fc2db617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: 15,
                  marginVertical: 10,
                  textAlign: "center",
                }}
              >
                Tuan Nguyen
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 13, textAlign: "center" }}
              >
                Yêu thích nấu nướng bếp núc
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL("https://facebook.com")}
                style={{ marginRight: 10 }}
              >
                <Image
                  style={{ width: 15, height: 15, tintColor: "#fff" }}
                  resizeMode="contain"
                  source={faceBookIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://instagram.com")}
                style={{ marginRight: 10 }}
              >
                <Image
                  style={{ width: 15, height: 15, tintColor: "#fff" }}
                  resizeMode="contain"
                  source={instagramIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://youtube.com")}
                style={{ marginRight: 10 }}
              >
                <Image
                  style={{ width: 15, height: 15, tintColor: "#fff" }}
                  resizeMode="contain"
                  source={youtubeIcon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 10,
                width: 140,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#FF7396",
                  fontWeight: "400",
                }}
              >
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

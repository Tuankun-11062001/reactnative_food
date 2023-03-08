import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  BlogStack,
  FavouriteStack,
  HomeStack,
  SettingStack,
  UserStack,
  VideoStack,
} from "./Stacks";
import CustomDrawer from "./CustomDrawer";
import homeIcon from "../assets/icon/home.png";
import userIcon from "../assets/icon/user.png";
import favouriteIcon from "../assets/icon/favourite.png";
import blogIcon from "../assets/icon/blog.png";
import videoIcon from "../assets/icon/video.png";
import settingIcon from "../assets/icon/setting.png";

const DrawerLib = createDrawerNavigator();

const Drawer = ({ navigation }) => {
  return (
    <DrawerLib.Navigator
      screenOptions={{
        headerShown: false,
        headerBackground: "#FF7396",
        drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: "#FF7396",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "#777",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerLib.Screen
        name="Home"
        component={HomeStack}
        navigation={navigation}
        options={{
          title: "Trang chủ",
          drawerIcon: () => (
            <Image
              source={homeIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
      <DrawerLib.Screen
        name="User"
        component={UserStack}
        options={{
          title: "Tài khoản",
          drawerIcon: () => (
            <Image
              source={userIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
      <DrawerLib.Screen
        name="Favourite"
        component={FavouriteStack}
        options={{
          title: "Yêu thích",
          drawerIcon: () => (
            <Image
              source={favouriteIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
      <DrawerLib.Screen
        name="Blog"
        component={BlogStack}
        options={{
          title: "Blog",
          drawerIcon: () => (
            <Image
              source={blogIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
      <DrawerLib.Screen
        name="Video"
        component={VideoStack}
        options={{
          title: "Video hướng dẫn",
          drawerIcon: () => (
            <Image
              source={videoIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
      <DrawerLib.Screen
        name="Setting"
        component={SettingStack}
        options={{
          title: "Cài đặt",
          drawerIcon: () => (
            <Image
              source={settingIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          ),
        }}
      />
    </DrawerLib.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});

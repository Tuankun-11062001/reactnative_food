import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Drawer from "./Drawer";
import User from "../screens/User";
import Event from "../screens/Event";
import OfCategory from "../screens/OfCategory";
import FoodDetail from "../screens/FoodDetail";
import Cart from "../screens/Cart";
import AllCategory from "../screens/AllCategory";
import AllFood from "../screens/AllFood";
import Paying from "../screens/Paying";
import HelperPaying from "../screens/HelperPaying";
import Favourite from "../screens/Favourite";
import Blog from "../screens/Blog";
import Video from "../screens/Video";
import Setting from "../screens/Setting";

const WelcomeStackRoute = createNativeStackNavigator();
const HomeStackRoute = createNativeStackNavigator();
const CartStackRoute = createNativeStackNavigator();
const FavouriteStackRoute = createNativeStackNavigator();
const BlogStackRoute = createNativeStackNavigator();
const VideoStackRoute = createNativeStackNavigator();
const SettingStackRoute = createNativeStackNavigator();

const WelcomeStack = () => {
  return (
    <WelcomeStackRoute.Navigator screenOptions={{ headerShown: false }}>
      <WelcomeStackRoute.Screen name="Welcome">
        {(props) => <Welcome {...props} />}
      </WelcomeStackRoute.Screen>
      <WelcomeStackRoute.Screen name="Login">
        {(props) => <Login {...props} />}
      </WelcomeStackRoute.Screen>
      <WelcomeStackRoute.Screen name="Signup">
        {(props) => <Signup {...props} />}
      </WelcomeStackRoute.Screen>
      <WelcomeStackRoute.Screen name="Home">
        {(props) => <Drawer {...props} />}
      </WelcomeStackRoute.Screen>
    </WelcomeStackRoute.Navigator>
  );
};

const HomeStack = () => {
  return (
    <HomeStackRoute.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackRoute.Screen name="Home">
        {(props) => <Home {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="Event">
        {(props) => <Event {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="AllCategory">
        {(props) => <AllCategory {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="AllFood">
        {(props) => <AllFood {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="OfCategory">
        {(props) => <OfCategory {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="FoodDetail">
        {(props) => <FoodDetail {...props} />}
      </HomeStackRoute.Screen>
      <HomeStackRoute.Screen name="Cart">
        {(props) => <CartStack {...props} />}
      </HomeStackRoute.Screen>
    </HomeStackRoute.Navigator>
  );
};

const CartStack = () => {
  return (
    <CartStackRoute.Navigator screenOptions={{ headerShown: false }}>
      <CartStackRoute.Screen name="Cart">
        {(props) => <Cart {...props} />}
      </CartStackRoute.Screen>
      <CartStackRoute.Screen name="Paying">
        {(props) => <Paying {...props} />}
      </CartStackRoute.Screen>
      <CartStackRoute.Screen name="HelperPaying">
        {(props) => <HelperPaying {...props} />}
      </CartStackRoute.Screen>
    </CartStackRoute.Navigator>
  );
};

const UserStack = () => {
  return (
    <HomeStackRoute.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackRoute.Screen name="User">
        {(props) => <User {...props} />}
      </HomeStackRoute.Screen>
    </HomeStackRoute.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <FavouriteStackRoute.Navigator>
      <FavouriteStackRoute.Screen name="Favourite">
        {(props) => <Favourite {...props} />}
      </FavouriteStackRoute.Screen>
    </FavouriteStackRoute.Navigator>
  );
};

const BlogStack = () => {
  return (
    <BlogStackRoute.Navigator screenOptions={{ headerShown: false }}>
      <BlogStackRoute.Screen name="Blog">
        {(props) => <Blog {...props} />}
      </BlogStackRoute.Screen>
    </BlogStackRoute.Navigator>
  );
};

const VideoStack = () => {
  return (
    <VideoStackRoute.Navigator>
      <VideoStackRoute.Screen name="Video">
        {(props) => <Video {...props} />}
      </VideoStackRoute.Screen>
    </VideoStackRoute.Navigator>
  );
};

const SettingStack = () => {
  return (
    <SettingStackRoute.Navigator>
      <SettingStackRoute.Screen name="Setting">
        {(props) => <Setting {...props} />}
      </SettingStackRoute.Screen>
    </SettingStackRoute.Navigator>
  );
};

export {
  HomeStack,
  WelcomeStack,
  UserStack,
  FavouriteStack,
  BlogStack,
  VideoStack,
  SettingStack,
};

const styles = StyleSheet.create({});

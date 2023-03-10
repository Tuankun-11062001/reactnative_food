import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeStack } from "./src/routes/Stacks";
import { CartProvider, UserProvider } from "./src/store/Provider";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer>
          <WelcomeStack />
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

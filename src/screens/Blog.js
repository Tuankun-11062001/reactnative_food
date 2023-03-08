import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import menuIcon from "../assets/icon/menu.png";
import CardBlog from "../components/CardBlog";

const Blog = ({ navigation }) => {
  // fake data
  const data = [1, 2, 3, 4, 5, 6, 7];

  // route
  const drawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
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
            Blog
          </Text>
        </View>
      </SafeAreaView>
      <View style={{ marginTop: 20, marginHorizontal: 20, flex: 1 }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardBlog />}
        />
      </View>
    </View>
  );
};

export default Blog;

import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import backIcon from "../assets/icon/back.png";

import CardFoodCategory from "../components/CardFoodCategory";

const widthScreen = Dimensions.get("screen").width;

const data = [
  {
    name: "Hamburger",
    detail: "Salat + Beef",
    id: 1,
    category: "fast food",
    price: 30,
    image:
      "https://www.pngall.com/wp-content/uploads/5/Barbecue-Hamburger-PNG-Free-Download.png",
  },
  {
    name: "Salat",
    detail: "Salach + dragon food",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://e7.pngegg.com/pngimages/790/674/png-clipart-hors-d-oeuvre-ham-pizza-capricciosa-tuna-salad-salat-thumbnail.png",
  },
  {
    name: "Kimchi Soup",
    detail: "Beef + nudol",
    id: 1,
    category: "Soup food",
    price: 30,
    image:
      "https://png.pngtree.com/png-vector/20210927/ourmid/pngtree-kimchi-soup-photo-color-cooking-red-png-image_3956338.png",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
];

const AllFood = ({ navigation, route }) => {
  const { title } = route.params;

  //   route
  const back = () => {
    navigation.goBack();
  };
  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: "#FF7396",
          paddingTop: Platform.OS === "ios" ? 0 : 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          <TouchableOpacity
            onPress={back}
            style={{
              position: "absolute",
              left: 20,
            }}
          >
            <Image
              source={backIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 17,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            {title}
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView style={{ paddingBottom: 100 }}>
        <View
          style={{
            // paddingHorizontal: 10,
            paddingBottom: 120,
            paddingTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.map((item) => (
            <CardFoodCategory item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllFood;

import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const widthScreen = Dimensions.get("window").width;

const CardFoodCategory = () => {
  const navigation = useNavigation();

  // route
  const goToFoodDetail = () => {
    navigation.navigate("FoodDetail");
  };

  return (
    <TouchableOpacity
      onPress={goToFoodDetail}
      style={{
        marginTop: 20,
        marginHorizontal: 20,
        width: widthScreen / 2 - 40,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#fff",
        shadowColor: "#FF7396",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 7,
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/chicken-feet-spicy-salad-with-fermented-pickled-fish-thai-food-zap-style-decoration-carved-chili-vegetable-sideview_71919-1917.jpg?size=626&ext=jpg&ga=GA1.2.682279216.1663405461",
        }}
        style={{
          width: "100%",
          height: 100,
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginBottom: 5,
            color: "#222",
          }}
        >
          Title
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 13, color: "#777" }}>
          Detail
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>30K</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF7396",
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFoodCategory;

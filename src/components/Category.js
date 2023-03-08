import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = ({ style }) => {
  const navigation = useNavigation();
  const data = [1, 2, 3];

  // route
  const goToOfCategory = () => {
    navigation.navigate("OfCategory", { data });
  };

  return (
    <TouchableOpacity
      onPress={goToOfCategory}
      style={{
        // marginRight: 20,
        backgroundColor: "#f7f7f7",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#FF7396",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      }}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/738/738079.png",
        }}
        resizeMode="contain"
        style={{
          height: 25,
          width: 25,
          alignSelf: "center",
          tintColor: "#FF7396",
        }}
      />
      <Text style={{ marginTop: 10, color: "#444", textAlign: "center" }}>
        Category
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

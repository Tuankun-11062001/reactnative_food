import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CardFoodPaying = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: "#FF7396",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        marginHorizontal: 5,
      }}
    >
      <Image
        source={{
          uri: item.image,
        }}
        style={{ borderRadius: 20, width: 200, height: 100 }}
        resizeMode="cover"
      />
      <Text style={{ marginTop: 5, fontSize: 14, color: "#777" }}>
        {item.name} <Text>x{item.qualityCart}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default CardFoodPaying;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useCartContext } from "../store/hook";
import { ADD_TO_CART_ORIGIN, ADD_TO_CART_PROCESS } from "../store/action";

const CardFood = ({ item }) => {
  const [stateCart, dispatchCart] = useCartContext();

  const addToCart = () => {
    const itemUpdate = {
      ...item,
      qualityCart: 1,
    };
    dispatchCart(ADD_TO_CART_PROCESS(itemUpdate));
    dispatchCart(ADD_TO_CART_ORIGIN(item));
  };

  return (
    <TouchableOpacity
      style={{
        marginTop: 30,
        padding: 10,
        backgroundColor: "#fff",
        width: 150,
        borderRadius: 20,
        shadowColor: "#FF7396",
        marginRight: 20,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
      }}
    >
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="contain"
        style={{
          width: 110,
          height: 110,
          alignSelf: "center",
          position: "absolute",
          top: -50,
        }}
      />
      <View
        style={{
          paddingTop: 50,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: "gray",
          }}
        >
          {item.detail}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            {item.price}k
          </Text>
          <TouchableOpacity
            onPress={addToCart}
            style={{
              backgroundColor: "#FF7396",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFood;

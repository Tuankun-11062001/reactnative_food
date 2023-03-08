import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

import trashIcon from "../assets/icon/trash.png";
import plusIcon from "../assets/icon/plus.png";
import minusIcon from "../assets/icon/minus.png";
import { useCartContext } from "../store/hook";
import { UPDATE_ITEM_CART } from "../store/action";

const widthSceen = Dimensions.get("screen").width;

const CardCart = ({ item, removeItem, indexCart }) => {
  // local state cart
  const [stateCart, dispatchCart] = useCartContext();
  const { cartOrigin } = stateCart;

  //  state cart process

  const [quality, setQuality] = useState(item.qualityCart);
  const [price, setPrice] = useState(item.price);
  const itemCardOrigin = cartOrigin.filter(
    (itemOrigin) => itemOrigin.id === item.id
  );
  const priceOrign = itemCardOrigin[0].price;

  // logically quality

  useEffect(() => {
    setPrice(priceOrign * quality);
    const itemUpdate = {
      ...item,
      qualityCart: quality,
      priceOrign,
      price: priceOrign * quality,
      indexCart: indexCart,
    };

    dispatchCart(UPDATE_ITEM_CART(itemUpdate));
  }, [quality]);

  const plus = () => {
    setQuality((prev) => prev + 1);
  };

  const minus = () => {
    if (quality <= 1) {
      setQuality(1);
    } else {
      setQuality((prev) => prev - 1);
    }
  };
  return (
    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="contain"
        style={{
          width: widthSceen / 3,
          marginRight: 5,
        }}
      />
      <View
        style={{
          marginLeft: 5,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontWeight: "500",
              flex: 1,
            }}
          >
            {item.name}
          </Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => removeItem(item.id)}
          >
            <Image
              source={trashIcon}
              style={{ width: 20, height: 20, tintColor: "#777" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: "#777",
            marginBottom: 10,
          }}
        >
          {item.category}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 13,
            color: "#777",
          }}
        >
          {item.detail}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "400" }}>{price}K</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={minus}
              style={{
                borderColor: "#777",
                borderWidth: 1,
                padding: 5,
                borderRadius: 30,
              }}
            >
              <Image
                source={minusIcon}
                style={{ width: 13, height: 13, tintColor: "#777" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingHorizontal: 10,
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {quality}
            </Text>
            <TouchableOpacity
              onPress={plus}
              style={{
                borderColor: "#777",
                borderWidth: 1,
                padding: 5,
                borderRadius: 30,
              }}
            >
              <Image
                source={plusIcon}
                style={{ width: 13, height: 13, tintColor: "#777" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCart;

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";

import backIcon from "../assets/icon/back.png";
import CardCart from "../components/CardCart";
import { useCartContext } from "../store/hook";
import { REMOVE_ITEM_CART, UPDATE_TOTAL_CART } from "../store/action";

const Cart = ({ navigation }) => {
  // logic Cart
  const [stateCart, dispatchCart] = useCartContext();
  const { cartProcess } = stateCart;

  // function remove item cart

  const removeItem = (id) => {
    console.log(id);
    dispatchCart(REMOVE_ITEM_CART(id));
  };

  const total = cartProcess.reduce((total, item) => {
    return total + item.price;
  }, 0);

  useEffect(() => {
    dispatchCart(UPDATE_TOTAL_CART(total));
  }, [total]);

  //   route
  const back = () => {
    navigation.goBack();
  };

  const gotToPaying = () => {
    navigation.navigate("Paying");
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "ios" ? 0 : 15,
          backgroundColor: "#FF7396",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 35,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={back}
            style={{
              position: "absolute",
              left: 10,
            }}
          >
            <Image
              source={backIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: "#fff",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            Giỏ hàng
          </Text>
        </View>
      </SafeAreaView>

      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 250,
          }}
          data={cartProcess}
          renderItem={({ item, index }) => (
            <CardCart item={item} indexCart={index} removeItem={removeItem} />
          )}
        />
      </View>
      <View
        style={
          Platform.OS === "ios"
            ? {
                position: "absolute",
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "#fff",

                paddingVertical: 20,
                shadowColor: "#FF7396",
                shadowOffset: {
                  width: 1,
                  height: -2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                elevation: 3,
              }
            : {
                position: "absolute",
                left: 0,
                bottom: 0,
                right: 0,

                paddingVertical: 20,
                shadowColor: "#FF7396",
                shadowOffset: {
                  width: 1,
                  height: -2,
                },
                shadowOpacity: 0.7,
                shadowRadius: 8,
                elevation: 3,
              }
        }
      >
        <View style={{ alignSelf: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 14, color: "#777" }}>
            Total Prices
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            {total}k
          </Text>
        </View>
        <TouchableOpacity
          onPress={gotToPaying}
          style={{
            backgroundColor: "#FF7396",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import giftIcon from "../assets/icon/gift.png";

const CardEvent = ({ event }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 7,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: "40%",
          zIndex: 7,
          alignSelf: "center",
          padding: 20,
          backgroundColor: "#f8f8f8",
          width: 300,
          borderRadius: 10,
        }}
      >
        <Image
          source={giftIcon}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: -70,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "500",
            color: "#fff",
            textShadowColor: "#FF7396",
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            textShadowRadius: 5,
          }}
        >
          Mùa đông đến gòi
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: "gray",
            textAlign: "center",
          }}
        >
          Tham gia Event cùng chúng mình để có được những voucher hấp dẫn nhé.
        </Text>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
        >
          <TouchableOpacity
            onPress={() => event(1)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#FF7396",
              marginRight: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>Tham Gia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => event(0)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#FF7396",
              marginLeft: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>Tạm đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardEvent;

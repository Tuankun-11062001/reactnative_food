import { View, Text, Image } from "react-native";
import React from "react";
import userIcon from "../assets/icon/user.png";
import dotIcon from "../assets/icon/dot.png";
import timeIcon from "../assets/icon/time.png";

const CardBlog = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{
          flex: 0.5,
          height: 80,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#FF7396",
          marginRight: 10,
        }}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={dotIcon}
            style={{
              width: 10,
              height: 10,
              marginRight: 5,
              tintColor: "gray",
            }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 13, color: "gray" }}>Food</Text>
        </View>

        <Text
          style={{
            marginVertical: 5,
            fontSize: 16,
            fontWeight: "500",
            color: "#222",
          }}
          numberOfLines={2}
        >
          Hello to day is great Hello to day is great Hello to day is great
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Image
              source={userIcon}
              style={{
                width: 10,
                height: 10,
                marginRight: 5,
                tintColor: "gray",
              }}
              resizeMode="contain"
            />
            <Text style={{ color: "gray" }}>by author</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={timeIcon}
              style={{
                width: 10,
                height: 10,
                marginRight: 5,
                tintColor: "gray",
              }}
              resizeMode="contain"
            />
            <Text style={{ color: "gray" }}>time </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBlog;

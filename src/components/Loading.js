import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import loadingGif from "../assets/gif/loading.gif";

const Loading = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View>
          <Text
            style={{
              color: "#FF7396",
              fontSize: 20,
              fontWeight: "600",
              marginBottom: 50,
            }}
          >
            Chào mừng đến với Junee Food
          </Text>
        </View>
        <Image
          source={loadingGif}
          style={{
            width: 100,
            height: 100,
          }}
          resizeMode="contain"
        />
        <Text style={{ color: "#777" }}>Vui lòng chờ loading... dữ liệu</Text>
      </View>
    </View>
  );
};

export default Loading;

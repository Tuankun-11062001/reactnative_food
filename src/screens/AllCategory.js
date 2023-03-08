import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import backIcon from "../assets/icon/back.png";
import Category from "../components/Category";

const widthScreen = Dimensions.get("screen").width;

const AllCategory = ({ navigation }) => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

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
            All Category
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView style={{ paddingBottom: 100 }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 120,
            paddingTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.map((item) => (
            <View
              style={{
                width: widthScreen / 2 - 10,
                alignSelf: "center",
                padding: 10,
              }}
            >
              <Category />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllCategory;

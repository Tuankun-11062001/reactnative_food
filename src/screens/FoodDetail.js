import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import backIcon from "../assets/icon/back.png";
import elipsIcon from "../assets/icon/elips.png";
import plusIcon from "../assets/icon/plus.png";
import minusIcon from "../assets/icon/minus.png";

const FoodDetail = ({ navigation }) => {
  const [quality, setQuality] = useState(1);
  const [seeMore, setSeeMore] = useState(true);

  // route
  const back = () => {
    navigation.goBack();
  };

  //   logic plus and minus

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

  //   logic seemore
  const hanldeSeeMore = () => {
    setSeeMore((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "ios" ? 0 : 25,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 7,
        }}
      >
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={back}>
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
          <TouchableOpacity>
            <Image
              source={elipsIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: "#fff",
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/wide-noodles-gravy-seafood-rad-na_1150-27412.jpg?size=626&ext=jpg&ga=GA1.2.682279216.1663405461",
        }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "400",
              color: "#777",
              marginBottom: 10,
            }}
          >
            Category
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#222",
              marginBottom: 10,
            }}
          >
            Name Food
          </Text>
          <Text style={{ fontSize: 16, color: "#FF7396", fontWeight: "600" }}>
            30k
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={plus}
            style={{
              flex: 1,
              backgroundColor: "pink",
              padding: 10,
            }}
          >
            <Image
              source={plusIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: "#fff",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              width: 100,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "#FF7396",
            }}
          >
            {quality}
          </Text>

          <TouchableOpacity
            onPress={minus}
            style={{
              flex: 1,
              backgroundColor: "pink",
              padding: 10,
            }}
          >
            <Image
              source={minusIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: "#fff",
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            paddingBottom: 100,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "#222",
              marginBottom: 10,
            }}
          >
            Description
          </Text>
          {seeMore ? (
            <Text
              style={{
                fontSize: 14,
                color: "#777",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          ) : (
            <Text
              numberOfLines={2}
              style={{
                fontSize: 14,
                color: "#777",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </Text>
          )}
          <TouchableOpacity
            onPress={hanldeSeeMore}
            style={{
              marginTop: 10,
            }}
          >
            {seeMore ? (
              <Text style={{ color: "#FF7396" }}>minus</Text>
            ) : (
              <Text style={{ color: "#FF7396" }}>See more</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* bottom */}

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          //   backgroundColor: "#FF7396",
          backgroundColor: "#fff",
          shadowColor: "#FF7396",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowRadius: 7,
          shadowOpacity: 0.5,
          paddingHorizontal: 10,
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              //   color: "#fff",
              color: "#FF7396",
              marginBottom: 5,
            }}
          >
            200K
          </Text>
          <Text style={{ fontSize: 13, color: "#777", fontWeight: "400" }}>
            Item 2
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            borderRadius: 30,
            // backgroundColor: "#fff",
            backgroundColor: "#FF7396",
          }}
        >
          <Text style={{ color: "#fff" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodDetail;

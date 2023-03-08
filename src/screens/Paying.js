import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import backIcon from "../assets/icon/back.png";
import helperIcon from "../assets/icon/helper.png";
import bankIcon from "../assets/icon/bank.png";
import moneyIcon from "../assets/icon/money.png";
import walletIcon from "../assets/icon/wallet.png";
import paypalIcon from "../assets/icon/paypal.png";
import CardFoodPaying from "../components/CardFoodPaying";
import { useCartContext } from "../store/hook";

const widthScreen = Dimensions.get("screen").width;

const Paying = ({ navigation }) => {
  const [stateCart, dispatchCart] = useCartContext();
  const { cartProcess, total } = stateCart;

  // route
  const back = () => {
    navigation.goBack();
  };

  const helper = () => {
    navigation.navigate("HelperPaying");
  };
  return (
    <View style={{ flex: 1 }}>
      {/* header */}

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
              left: 20,
            }}
          >
            <Image
              source={backIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "500" }}>
            Paying
          </Text>

          <TouchableOpacity
            onPress={helper}
            style={{
              position: "absolute",
              right: 20,
            }}
          >
            <Image
              source={helperIcon}
              style={{ width: 20, height: 20, tintColor: "#fff" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* body paying */}

      <ScrollView style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {/* food list paying */}
        <View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              color: "#444",
              marginBottom: 20,
            }}
          >
            Các món ăn bạn đã chọn{" "}
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cartProcess.map((item) => (
              <CardFoodPaying item={item} />
            ))}
          </ScrollView>
        </View>

        {/* total item and money */}

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#FF7396",
              marginRight: 5,
              borderRadius: 10,
              height: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "400",
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Total item
            </Text>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>
              {cartProcess.length}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FF7396",
              marginRight: 5,
              borderRadius: 10,
              height: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "400",
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Total Money
            </Text>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>
              {total} k
            </Text>
          </View>
        </View>

        {/* paying  */}

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#444" }}>
            Bạn có thể thanh toán qua
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: widthScreen / 2 - 25,
                marginRight: 5,
                marginBottom: 5,
                height: 70,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#FF7396",
              }}
            >
              <Image
                source={bankIcon}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "lightgreen",
                  marginBottom: 5,
                }}
                resizeMode="contain"
              />
              <Text style={{ color: "#555", fontSize: 14 }}>Bank</Text>
            </View>
            <View
              style={{
                width: widthScreen / 2 - 25,
                marginLeft: 5,
                marginBottom: 5,
                height: 70,
                borderWidth: 2,
                borderColor: "#FF7396",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={paypalIcon}
                style={{
                  width: 25,
                  height: 25,
                  //   tintColor: "lightgreen",
                  marginBottom: 5,
                }}
                resizeMode="contain"
              />
              <Text style={{ color: "#555", fontSize: 14 }}>Paypal</Text>
            </View>
            <View
              style={{
                width: widthScreen / 2 - 25,
                marginRight: 5,
                marginTop: 5,
                height: 70,
                borderWidth: 2,
                borderColor: "#FF7396",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={walletIcon}
                style={{
                  width: 25,
                  height: 25,
                  //   tintColor: "lightgreen",
                  marginBottom: 5,
                }}
                resizeMode="contain"
              />
              <Text style={{ color: "#555", fontSize: 14 }}>Ví điện tử</Text>
            </View>
            <View
              style={{
                width: widthScreen / 2 - 25,
                marginLeft: 5,
                marginTop: 5,
                height: 70,
                borderWidth: 2,
                borderColor: "#FF7396",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={moneyIcon}
                style={{
                  width: 25,
                  height: 25,
                  //   tintColor: "lightgreen",
                  marginBottom: 5,
                }}
                resizeMode="contain"
              />
              <Text style={{ color: "#555", fontSize: 14 }}>Tiền mặt</Text>
            </View>
          </View>
        </View>

        {/* sheetbottom */}
      </ScrollView>
    </View>
  );
};

export default Paying;

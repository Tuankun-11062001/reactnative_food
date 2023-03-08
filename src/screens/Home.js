import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import menuIcon from "../assets/icon/menu.png";
import cartIcon from "../assets/icon/cart.png";
import searchIcon from "../assets/icon/search.png";
import closeIcon from "../assets/icon/close.png";
import hiIcon from "../assets/icon/hi.png";
import ListCategory from "../components/ListCategory";
import PopularFoodList from "../components/PopularFoodList";
import CardEvent from "../components/CardEvent";
import Loading from "../components/Loading";
import { useCartContext } from "../store/hook";

const Home = ({ navigation }) => {
  // Animated home Screen

  const fadeAnim = useRef(new Animated.Value(0.5)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const [search, setSearch] = useState("");
  const [event, setEvent] = useState(false);
  const [loading, setLoading] = useState(true);

  // event

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setEvent(true);
    }, 10000);
  }, []);

  const eventChoosing = (number) => {
    if (number === 0) {
      setEvent(false);
    } else {
      navigation.navigate("Event");
      setEvent(false);
    }
  };

  // route
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const goToCart = () => {
    navigation.navigate("Cart");
  };

  const goAllCategory = () => {
    navigation.navigate("AllCategory");
  };

  const goToAllFood = (title) => {
    navigation.navigate("AllFood", {
      title,
    });
  };

  // listen Text input Search
  const changeTextSearch = (val) => {
    setSearch(val);
  };

  // button
  const clearText = () => {
    setSearch("");
  };

  // logic cart item
  const [stateCart, dispatchCart] = useCartContext();
  let itemCart = stateCart.cartProcess.length;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          {/* Event */}

          {event && <CardEvent event={eventChoosing} />}

          {/* header */}

          <SafeAreaView
            style={{
              paddingTop: Platform.OS === "ios" ? 0 : 25,
              backgroundColor: "#FF7396",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              zIndex: 6,
            }}
          >
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 45,

                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={openDrawer}>
                <Image
                  source={menuIcon}
                  style={{
                    width: 30,
                    height: 30,
                    // tintColor: "#FF7396",
                    tintColor: "#fff",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={goToCart}>
                <Image
                  source={cartIcon}
                  style={{
                    width: 30,
                    height: 30,
                    // tintColor: "#FF7396",
                    tintColor: "#fff",
                  }}
                />
                <View
                  style={{
                    display: itemCart === 0 ? "none" : "flex",
                    position: "absolute",
                    top: 0,
                    left: -10,
                    backgroundColor: "#fff",
                    width: 25,
                    height: 25,
                    borderRadius: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "#FF7396",
                      fontSize: 12,
                      alignSelf: "center",
                      marginTop: 3,
                    }}
                  >
                    {itemCart}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* search */}

            <View
              style={{
                backgroundColor: "#fff",
                paddingVertical: 10,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
                bottom: -20,
                width: 350,
                alignSelf: "center",
                shadowColor: "#FF7396",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.5,
              }}
            >
              <Image
                source={searchIcon}
                resizeMode="contain"
                style={{
                  width: 15,
                  height: 15,
                  tintColor: "gray",
                  marginHorizontal: 10,
                }}
              />
              <TextInput
                placeholder="Search..."
                style={{ flex: 1, fontSize: 13 }}
                onChangeText={changeTextSearch}
                value={search}
              />
              <TouchableOpacity
                onPress={clearText}
                style={{
                  display: search.length > 0 ? "flex" : "none",
                }}
              >
                <Image
                  source={closeIcon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: "gray",
                    marginHorizontal: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          {/*  hello */}
          <ScrollView>
            <View
              style={{
                padding: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <Image
                  source={hiIcon}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    marginRight: 10,
                  }}
                />
                <Text style={{ fontWeight: "500" }}>Hi! Tuấn Nguyễn</Text>
              </View>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 25,
                  width: 300,
                  fontWeight: "600",
                  color: "#fff",
                  textShadowColor: "#FF7396",
                  textShadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  textShadowRadius: 6,
                }}
              >
                Chúc bạn một ngày mới vui vẻ nhé.
              </Text>
            </View>

            {/* list categories */}

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "500", color: "#444" }}
                >
                  Thể loại
                </Text>
                <TouchableOpacity onPress={goAllCategory}>
                  <Text style={{ color: "#FF7396" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  {
                    // paddingHorizontal: 20
                  }
                }
              >
                <ListCategory />
              </View>
            </View>

            {/* list Top Food (popular food) */}

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "500", color: "#444" }}
                >
                  Món ăn đặt nhiều
                </Text>
                <TouchableOpacity
                  onPress={() => goToAllFood("Món ăn đặt nhiều")}
                >
                  <Text style={{ color: "#FF7396" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>

              {/* list popular food */}

              <PopularFoodList />
            </View>

            {/* list common Food (common food) */}

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "500", color: "#444" }}
                >
                  Món ăn phổ biến
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#FF7396" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>

              {/* list popular food */}

              <PopularFoodList />
            </View>

            {/* list winter Food (winter food) */}

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "500", color: "#444" }}
                >
                  Món ăn mùa đông
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#FF7396" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>

              {/* list popular food */}

              <PopularFoodList />
            </View>

            {/* list Sale Food (Sale food) */}

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "500", color: "#444" }}
                >
                  Món ăn giảm giá
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#FF7396" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>

              {/* list popular food */}

              <PopularFoodList />
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});

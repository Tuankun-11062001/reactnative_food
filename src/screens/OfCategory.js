import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import backIcon from "../assets/icon/back.png";
import cartIcon from "../assets/icon/cart.png";
import searchIcon from "../assets/icon/search.png";
import CardFood from "../components/CardFood";
import PopularFoodList from "../components/PopularFoodList";
import CardFoodCategory from "../components/CardFoodCategory";

const data = [
  {
    name: "Hamburger",
    detail: "Salat + Beef",
    id: 1,
    category: "fast food",
    price: 30,
    image:
      "https://www.pngall.com/wp-content/uploads/5/Barbecue-Hamburger-PNG-Free-Download.png",
  },
  {
    name: "Salat",
    detail: "Salach + dragon food",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://e7.pngegg.com/pngimages/790/674/png-clipart-hors-d-oeuvre-ham-pizza-capricciosa-tuna-salad-salat-thumbnail.png",
  },
  {
    name: "Kimchi Soup",
    detail: "Beef + nudol",
    id: 1,
    category: "Soup food",
    price: 30,
    image:
      "https://png.pngtree.com/png-vector/20210927/ourmid/pngtree-kimchi-soup-photo-color-cooking-red-png-image_3956338.png",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 1,
    category: "Healthy food",
    price: 30,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
];

const OfCategory = ({ navigation, route }) => {
  const [search, setSearch] = useState("");

  //   route

  const back = () => {
    navigation.goBack();
  };

  // event handlers search

  const changeTextSearch = (search) => {
    setSearch(search);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "ios" ? 0 : 25,
          backgroundColor: "#FF7396",
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          zIndex: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
            paddingVertical: 40,
            marginBottom: 10,
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
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: "#fff" }}
            />
          </TouchableOpacity>

          {/* text of category */}
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            Category
          </Text>

          {/* button cart */}

          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
            }}
          >
            <Image
              source={cartIcon}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: "#fff" }}
            />
          </TouchableOpacity>
        </View>

        {/* search */}

        <View
          style={{
            position: "absolute",
            bottom: -20,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: 350,
              paddingHorizontal: 5,
              paddingVertical:
                Platform.OS === "ios"
                  ? search.length > 0
                    ? 5
                    : 9.5
                  : search.length > 0
                  ? 4
                  : 4.6,
              borderRadius: 30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={searchIcon}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                marginHorizontal: 10,
                tintColor: "gray",
              }}
            />

            {/* search input */}

            <TextInput
              placeholder="search"
              style={{ flex: 1 }}
              value={search}
              onChangeText={changeTextSearch}
            />

            {/* button search */}

            <TouchableOpacity
              style={{
                backgroundColor: "#FF7396",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginLeft: 5,
                display: search.length > 0 ? "flex" : "none",
              }}
            >
              <Text style={{ fontSize: 13, color: "#fff" }}>Tìm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 30,
            justifyContent: "space-between",
          }}
        >
          {data.map((item) => (
            <CardFoodCategory item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OfCategory;

const styles = StyleSheet.create({});

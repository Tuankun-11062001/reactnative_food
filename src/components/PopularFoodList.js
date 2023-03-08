import { View, Text, ScrollView } from "react-native";
import React from "react";
import CardFood from "./CardFood";

const data = [
  {
    name: "Hamburger",
    detail: "Salat + Beef",
    id: 1,
    category: "fast food",
    price: 90,
    image:
      "https://www.pngall.com/wp-content/uploads/5/Barbecue-Hamburger-PNG-Free-Download.png",
  },
  {
    name: "Salat",
    detail: "Salach + dragon food",
    id: 2,
    category: "Healthy food",
    price: 20,
    image:
      "https://e7.pngegg.com/pngimages/790/674/png-clipart-hors-d-oeuvre-ham-pizza-capricciosa-tuna-salad-salat-thumbnail.png",
  },
  {
    name: "Kimchi Soup",
    detail: "Beef + nudol",
    id: 3,
    category: "Soup food",
    price: 70,
    image:
      "https://png.pngtree.com/png-vector/20210927/ourmid/pngtree-kimchi-soup-photo-color-cooking-red-png-image_3956338.png",
  },
  {
    name: "Rice with Beef",
    detail: "Rice + Beef",
    id: 4,
    category: "Healthy food",
    price: 100,
    image:
      "https://png.pngtree.com/png-clipart/20210521/ourmid/pngtree-classic-beef-fried-rice-png-image-food-decoration-png-image_3294734.jpg",
  },
];

const PopularFoodList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      {data.map((item) => (
        <CardFood item={item} />
      ))}
    </ScrollView>
  );
};

export default PopularFoodList;

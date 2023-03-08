import { View, Text, FlatList, ScrollView, SectionList } from "react-native";
import React from "react";
import Category from "./Category";

const data = [1, 2, 3, 4];
const ListCategory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 10,
        marginHorizontal: 20,
      }}
    >
      {data.map((item) => (
        <View style={{ paddingHorizontal: 5, flex: 1 }}>
          <Category item={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ListCategory;

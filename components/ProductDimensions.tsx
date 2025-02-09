import { fontStyle } from "@/constants/font";
import { formatDimensionKey } from "@/utils/helper";
import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

type ProductDimensionsProps = {
  dimensions: {
    [key: string]: string;
  };
};

const ProductDimensions = ({ dimensions }: ProductDimensionsProps) => {
  // Convert the dimensions object to an array of key-value pairs
  const dimensionsArray = Object.entries(dimensions || {});

  return (
    <View>
      <FlatList
        data={dimensionsArray} // Pass the array of dimensions
        scrollEnabled={false}
        className="mt-3"
        keyExtractor={(item) => item[0]} // Use the dimension name (e.g., 'depth') as the key
        renderItem={({ item, index }) => (
          <View
            className={`flex flex-row justify-between py-2 ${
              index === dimensionsArray.length - 1
                ? ""
                : "border-b border-neutral-40"
            }`}
          >
            <Text style={[fontStyle.ManropeMedium]}>
              {formatDimensionKey(item[0])}
            </Text>
            <Text>{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductDimensions;

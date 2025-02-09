import { fontStyle } from "@/constants/font";
import { Product, Variant } from "@/types/Product";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import VariantCard from "./VariantCard";
import { useProduct } from "@/context/useProduct/context";

type VariantsProps = {
  variants: Product["variants"];
};

const Variants = ({ variants }: VariantsProps) => {
  const { setSelectedVariant, selectedVariant } = useProduct();

  return (
    <View className="px-4 py-3">
      <Text className="text-2xl text-text" style={[fontStyle.ManropeSemibold]}>
        Colors
      </Text>
      <View className="mt-3">
        <FlatList
          scrollEnabled={false}
          data={variants}
          numColumns={2}
          columnWrapperStyle={{ gap: 16, marginBottom: 16 }}
          keyExtractor={(variant) => variant.name}
          renderItem={({ item }) => (
            <VariantCard
              name={item.name}
              colorCode={item.colorCode}
              isSelected={selectedVariant?.name === item.name}
              onPress={() => setSelectedVariant(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Variants;

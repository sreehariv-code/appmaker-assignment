import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fontStyle } from "@/constants/font";

import { Variant } from "@/types/Product";

type VariantCardProps = {
  name: Variant["name"];
  colorCode: Variant["colorCode"];
  onPress: () => void;
  isSelected: boolean;
};

export default function VariantCard({
  name,
  colorCode,
  onPress,
  isSelected,
}: VariantCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={{ flex: 1 }} onPress={onPress}>
      <View
        className={`flex flex-row items-center  gap-2 rounded-xl p-3 border ${
          isSelected ? "border-primary " : "border-neutral-40"
        }`}
      >
        <View
          className="w-12 aspect-square rounded-md"
          style={{ backgroundColor: colorCode }}
        />
        <Text style={[fontStyle.ManropeLight]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

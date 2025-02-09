import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FrequentlyBoughtCarousel from "./FrequentlyBoughtCarousel";
import { fontStyle } from "@/constants/font";
import { Link } from "expo-router";
import { useProduct } from "@/context/useProduct/context";
import Banner from "./Banner";

export default function FrequentlyBoughtSection() {
  const { productDetails } = useProduct();
  return (
    <View className="relative">
      <View className="flex-row justify-between px-4">
        <Text className="text-xl text-text" style={[fontStyle.ManropeBold]}>
          Frequently bought
        </Text>
        <Link
          href={{
            pathname: "/seemore",
          }}
          className="text-lg text-primary underline"
          style={[fontStyle.ManropeSemibold]}
        >
          See More
        </Link>
      </View>
      <FrequentlyBoughtCarousel
        frequentlyBoughtWith={productDetails?.frequentlyBoughtWith}
      />
    </View>
  );
}

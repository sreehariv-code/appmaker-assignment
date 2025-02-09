import { Product } from "@/types/Product";
import { formatPrice, onShare } from "@/utils/helper";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useProduct } from "@/context/useProduct/context";
import { fontStyle } from "@/constants/font";

type ProductInfoProps = {
  name: Product["name"];
  price: Product["price"];
  rating: Product["rating"];
  description: Product["description"]["short"];
  toScroll: () => void;
};

const ProductInfo = ({
  name,
  rating,
  description,
  price,
  toScroll,
}: ProductInfoProps) => {
  const { selectedVariant } = useProduct();

  return (
    <View className="px-4">
      <View className="flex justify-between flex-row pt-4 items-center">
        <Text style={{ fontFamily: "Manrope" }} className="text-primary">
          {name}
        </Text>
        <TouchableOpacity
          onPress={() => onShare({ message: `${name} | ${description}` })}
          className=" p-2  rounded-md"
        >
          <Feather name="share" size={20} className="text-red-500" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center gap-2">
        <Text
          className="text-3xl font-semibold text-primary"
          style={[fontStyle.ManropeBold]}
        >
          {formatPrice(
            selectedVariant?.price?.currencyCode || price?.currencyCode,
            selectedVariant?.price?.current || price?.current
          )}
        </Text>
        <Text
          className=" font-light text-black line-through"
          style={[fontStyle.ManropeRegular]}
        >
          {formatPrice(
            selectedVariant?.price?.currencyCode || price?.currencyCode,
            selectedVariant?.price?.original || price?.original
          )}
        </Text>
        <View className="bg-alert py-1 px-2 rounded-tl-xl rounded-br-xl">
          <Text className="text-white" style={[fontStyle.ManropeSemibold]}>
            {selectedVariant?.price?.discount}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={toScroll}
        className="flex flex-row items-center gap-2 py-2"
      >
        <AntDesign name="star" size={18} color="#EBB65B" />
        <Text style={[fontStyle.ManropeRegular]}>
          {rating?.score} ({rating?.totalReviews})
        </Text>
      </TouchableOpacity>
      <View className="w-[90%] max-w-[400px]">
        <Text className="text-lg text-text" style={[fontStyle.ManropeMedium]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ProductInfo;

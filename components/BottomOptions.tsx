import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { fontStyle } from "@/constants/font";

export default function BottomOptions() {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Item added to cart successfully!");
    } catch (error) {
      alert("Failed to add item to cart");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="bg-white rounded-tl-2xl rounded-tr-2xl flex-row px-4 h-[120px] pt-5 gap-2 elevation-2xl">
      <TouchableOpacity
        onPress={toggleWishlist}
        className="aspect-square max-w-[50px]  border-2 border-primary rounded-xl justify-center items-center"
      >
        <AntDesign
          name={isWishlisted ? "heart" : "hearto"}
          color="#156651"
          size={20}
          style={{ fontWeight: 900 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 h-[50px] justify-center items-center bg-primary rounded-xl"
        onPress={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white" style={[fontStyle.ManropeSemibold]}>
            Add to Cart
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: number;
};

export default function StarRatingComponent({
  rating,
  onRatingChange,
  size = 24,
}: StarRatingProps) {
  return (
    <View className="flex-row">
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => onRatingChange(star)}
          className="mx-1"
        >
          <Ionicons
            name={rating >= star ? "star" : "star-outline"}
            size={size}
            color="#156651"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

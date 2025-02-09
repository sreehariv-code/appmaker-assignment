import React from "react";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type RatingComponentProps = {
  totalNumberOfStars: number;
  rating: number;
};

export default function RatingComponent({
  rating,
  totalNumberOfStars,
}: RatingComponentProps) {
  return (
    <View className=" flex-row gap-1 ">
      {[...Array(totalNumberOfStars)].map((_, index) => {
        const isFilled = index < rating;
        return (
          <AntDesign
            key={index}
            name="star"
            size={16}
            color={isFilled ? "#EBB65B" : "#E0E0E0"}
          />
        );
      })}
    </View>
  );
}

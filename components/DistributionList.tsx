import { Product } from "@/types/Product";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

type DistributionListProps = {
  distribution: Product["reviews"]["summary"]["distribution"];
  totalReviews: number;
};

export default function DistributionList({
  distribution,
  totalReviews,
}: DistributionListProps) {
  // Calculate the percentage of reviews for each rating
  const getPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };
  return (
    <View className="flex-1 ml-7">
      {Object.entries(distribution)
        .reverse() // Reversing the order
        .map(([rating, count]) => {
          const percentage = getPercentage(count);
          return (
            <View key={rating} className="">
              <View className="flex-row gap-2 items-center">
                <Text className="text-xl text-text">{rating}</Text>
                <Ionicons name="star" size={18} color="#156651" />
                <View
                  className="bg-transparent"
                  style={{
                    width: "100%",
                    height: 10,
                    borderRadius: 5,
                  }}
                >
                  <View
                    className="bg-primary"
                    style={{
                      width: `${percentage}%`,
                      height: "100%",
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
}

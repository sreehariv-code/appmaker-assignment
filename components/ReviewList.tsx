import { View, Text, FlatList } from "react-native";
import React from "react";
import { Product } from "@/types/Product";
import { LinearGradient } from "expo-linear-gradient";
import { fontStyle } from "@/constants/font";
import RatingComponent from "./RatingComponent";

type ReviewListProps = {
  items: Product["reviews"]["items"];
};

export default function ReviewList({ items }: ReviewListProps) {
  return (
    <View className="flex-1 py-5  mt-3">
      {items?.length > 0 ? (
        <FlatList
          scrollEnabled={false}
          data={items}
          renderItem={({ item }) => (
            <View className="flex-row mb-5 gap-2">
              <View className="w-16 aspect-square rounded-full relative overflow-hidden flex items-center justify-center">
                <LinearGradient
                  colors={["#1A7F65", "#115543"]}
                  className="absolute inset-0 "
                />
                <Text
                  className="text-white text-2xl"
                  style={[fontStyle.ManropeBold]}
                >
                  {item?.author?.name[0].toUpperCase()}
                </Text>
              </View>
              <View className="mt-1  flex-1 flex-row justify-between">
                <View>
                  <Text className="text-xl" style={[fontStyle.ManropeBold]}>
                    {item?.author?.name}
                  </Text>
                  <Text className="text-text/65  max-w-[200px] ">
                    {item?.content}
                  </Text>
                </View>
                <RatingComponent totalNumberOfStars={5} rating={item?.rating} />
              </View>
            </View>
          )}
        />
      ) : (
        <Text>"No Reviews"</Text>
      )}
    </View>
  );
}

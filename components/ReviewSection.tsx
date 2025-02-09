import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "@/types/Product";
import { Link } from "expo-router";
import { fontStyle } from "@/constants/font";
import Ionicons from "@expo/vector-icons/Ionicons";
import DistributionList from "./DistributionList";
import ReviewList from "./ReviewList";

type ReviewSectionProps = {
  reviews: Product["reviews"];
};

const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  const distribution = reviews?.summary?.distribution || {};
  const totalReviews = reviews?.summary?.totalReviews || 0;

  // Calculate the percentage of reviews for each rating
  const getPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <View className="px-4 py-5">
      <View className="flex flex-row justify-between">
        <Text className="text-xl text-text" style={[fontStyle.ManropeBold]}>
          Reviews
        </Text>
        <Link
          className="text-lg text-primary underline"
          style={[fontStyle.ManropeSemibold]}
          href={{
            pathname: "/reviewmodal",
          }}
        >
          + Add Review
        </Link>
      </View>
      <View className="mt-7 flex-row  px-4">
        <View className="">
          <View className="flex-row gap-2 items-center ">
            <Text className="text-[40px]" style={[fontStyle.ManropeExtraBold]}>
              {reviews?.summary?.averageRating}
            </Text>
            <Ionicons name="star" size={40} color="#156651" />
          </View>

          <Text
            className="text-white bg-black px-4 py-2 mt-2 text-center w-max mr-auto rounded-full"
            style={[fontStyle.ManropeBold]}
          >
            {totalReviews} reviews
          </Text>
        </View>

        <DistributionList
          distribution={distribution}
          totalReviews={totalReviews}
        />
      </View>
      <ReviewList items={reviews?.items} />
    </View>
  );
};

export default ReviewSection;

const styles = StyleSheet.create({});

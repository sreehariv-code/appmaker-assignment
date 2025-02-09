import { fontStyle } from "@/constants/font";
import { FrequentlyBoughtProduct, Product } from "@/types/Product";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type FrequentlyBoughtCarouselProps = {
  frequentlyBoughtWith: Product["frequentlyBoughtWith"];
};

type RenderItemProps = {
  item: FrequentlyBoughtProduct;
};

export default function FrequentlyBoughtCarousel({
  frequentlyBoughtWith = [],
}: FrequentlyBoughtCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (160 + 10)); // item width + gap
    setActiveIndex(index);
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <View className=" w-[160px] bg-white aspect-[2/3.3] rounded-xl  elevation-md py-5">
      <View className="relative mx-auto w-[130px] aspect-square bg-yellow-50">
        <Image
          className="absolute w-full h-full"
          source={{
            uri: item?.images?.thumbnail,
          }}
        />
        <View className="absolute bg-red-500 left-0 bottom-0 px-2 py-1 rounded-tl-xl rounded-br-xl">
          <Text
            className="text-white text-sm"
            style={[fontStyle.ManropeMedium]}
          >
            {item?.discount}
          </Text>
        </View>
      </View>
      <View className="px-[15px]">
        <Text style={[fontStyle.ManropeLight]} className="mt-2">
          {item?.name}
        </Text>
        <Text
          className="text-text text-2xl"
          style={[fontStyle.ManropeSemibold]}
        >
          ${item?.price}
        </Text>
        <Text className="line-through" style={[fontStyle.ManropeLight]}>
          ${item?.originalPrice}
        </Text>
        <View className="flex-row gap-2 mt-1">
          <AntDesign name="star" color="#EBB65B" size={18} />
          <Text style={[fontStyle.ManropeLight]}>
            {item?.rating?.score} ({item?.rating?.totalReviews})
          </Text>
        </View>
      </View>
    </View>
  );

  if (frequentlyBoughtWith.length === 0) {
    return null;
  }

  return (
    <View className=" ">
      <FlatList
        data={frequentlyBoughtWith}
        renderItem={renderItem}
        snapToAlignment="start"
        snapToInterval={160 + 10}
        decelerationRate="normal"
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      />
      <View className="px-4 mb-4 mx-auto w-[50%]">
        <View className="h-1 bg-slate-200 rounded-full w-full overflow-hidden">
          <View
            className="h-full bg-[#156651] rounded-full"
            style={{
              width:
                activeIndex >= frequentlyBoughtWith.length - 2
                  ? "100%"
                  : `${Math.max(
                      33,
                      (activeIndex / (frequentlyBoughtWith.length - 1)) * 100
                    )}%`,
            }}
          />
        </View>
      </View>
    </View>
  );
}

import { useProduct } from "@/context/useProduct/context";
import { ImageGallery, Product } from "@/types/Product";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

export default function MainImageCarousel() {
  const { width } = Dimensions.get("window"); // Get screen width
  const { productDetails }: { productDetails: Product } = useProduct();
  const gallery = productDetails?.images?.gallery || []; // Get gallery images

  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track the current image index
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  return (
    <View className="flex-1 min-h-[300px] bg-white justify-center items-center overflow-hidden">
      {/* Image Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-row"
      >
        {gallery.map((image: ImageGallery) => (
          <Image
            key={`${image.alt} ${image.url}`}
            source={{ uri: image.url }}
            className="resize-contain"
            style={{ width, height: image.height }}
          />
        ))}
      </ScrollView>

      {/* Thumbnail Navigation */}
      <View className="flex-row mt-2">
        {gallery.map((image: ImageGallery, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              scrollViewRef.current?.scrollTo({
                x: index * width,
                animated: true,
              })
            }
          >
            <Image
              source={{ uri: image.url }}
              className={`w-16 aspect-square mx-1 rounded-md ${
                activeIndex === index ? "border-2 border-primary" : ""
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

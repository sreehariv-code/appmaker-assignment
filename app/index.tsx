import BottomOptions from "@/components/BottomOptions";
import Collapsible from "@/components/Collapsible";
import FrequentlyBoughtSection from "@/components/FrequentlyBoughtSection";
import HorizontalBar from "@/components/HorizontalBar";
import MainImageCarousel from "@/components/MainImageCarousel";
import ProductDimensions from "@/components/ProductDimensions";
import ProductInfo from "@/components/ProductInfo";
import ReviewSection from "@/components/ReviewSection";
import Variants from "@/components/Variants";
import { fontStyle } from "@/constants/font";
import { useProduct } from "@/context/useProduct/context";
import { Product } from "@/types/Product";
import React, { useRef } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  loading: boolean;
  productDetails: Product;
};

const index = () => {
  const { productDetails, loading }: Props = useProduct();
  const scrollViewRef = useRef<ScrollView>(null);
  const section2Ref = useRef<View>(null);

  function scrollToSection() {
    section2Ref?.current?.measure((x, y, width, height, pageX, pageY) => {
      scrollViewRef.current?.scrollTo({ y: pageY - 40, animated: true });
    });
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 50 }}
        ref={scrollViewRef}
      >
        <MainImageCarousel />

        <ProductInfo
          name={productDetails?.name}
          price={productDetails?.price}
          rating={productDetails?.rating}
          description={productDetails?.description.short}
          toScroll={scrollToSection}
        />
        <HorizontalBar className="w-full mt-5 h-0.5 bg-slate-300" />
        <Variants variants={productDetails?.variants} />
        <HorizontalBar className="w-full mt-5 h-0.5 bg-slate-300" />
        <Collapsible className="px-4 py-7" title="Product Description">
          <View className="py-5">
            <Text className="text-text" style={[fontStyle.ManropeMedium]}>
              {productDetails?.description?.long}
            </Text>
          </View>
        </Collapsible>
        <HorizontalBar className="w-full h-0.5 bg-slate-300" />
        <Collapsible className="px-4 py-8" title="Size">
          <ProductDimensions dimensions={productDetails?.dimensions} />
          <View className="flex items-center">
            <Image
              source={{
                uri: productDetails?.description?.image?.url,
              }}
              style={{
                width: productDetails?.description?.image?.width,
                height: productDetails?.description?.image?.height,
              }}
            />
          </View>
        </Collapsible>
        <View ref={section2Ref}>
          <ReviewSection reviews={productDetails?.reviews} />
        </View>
        <FrequentlyBoughtSection />
      </ScrollView>
      <BottomOptions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default index;

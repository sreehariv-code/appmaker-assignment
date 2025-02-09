import { fontStyle } from "@/constants/font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Banner = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text
          className="text-lg"
          style={[styles.text, fontStyle.ManropeSemibold]}
        >
          {text}
        </Text>
        <View style={styles.ribbonEdge} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  banner: {
    backgroundColor: "#E44A4A",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    position: "relative",
    width: 130,
  },
  text: {
    color: "#fff",
  },
  ribbonEdge: {
    position: "absolute",
    right: -10,
    top: "50%",
    width: 20,
    aspectRatio: 1 / 1,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
  },
});

export default Banner;

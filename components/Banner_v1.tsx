import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      {/* Main Banner */}
      <View style={styles.banner}>
        <Text style={styles.text}>Best Seller</Text>
      </View>

      <View style={styles.triangle} />
      <View style={styles.roundedCornerTop} />
      <View style={styles.roundedCornerBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    position: "relative",
    margin: 10,
  },
  banner: {
    backgroundColor: "#e44a4a",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  triangle: {
    position: "absolute",
    right: -15,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#a32d2d",
  },
  roundedCornerTop: {
    position: "absolute",
    right: -12,
    top: -2,
    width: 8,
    height: 8,
    backgroundColor: "#a32d2d",
    borderRadius: 4,
  },
  roundedCornerBottom: {
    position: "absolute",
    right: -12,
    bottom: -2,
    width: 8,
    height: 8,
    backgroundColor: "#a32d2d",
    borderRadius: 4,
  },
});

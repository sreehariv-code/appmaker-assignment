import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SeeMoreScreen() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Demo Page</Text>
      <Link
        href={{
          pathname: "/",
        }}
        className="bg-primary text-lg px-3 py-1 mt-5 rounded-lg text-gray-100"
      >
        Go Back to Home Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});

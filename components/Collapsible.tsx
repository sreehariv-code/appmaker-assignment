import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { fontStyle } from "@/constants/font";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type CollapsibleProps = {
  title?: string;
  children: React.ReactNode;
  initialCollapsed?: boolean;
  className?: string;
};

export default function Collapsible({
  title,
  children,
  initialCollapsed,
  className,
}: CollapsibleProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    initialCollapsed ?? true
  );
  return (
    <View className={className}>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl text-text " style={[fontStyle.ManropeBold]}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
          <View
            style={{ transform: [{ rotate: isCollapsed ? "0deg" : "180deg" }] }}
          >
            <FontAwesome6 name="chevron-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {isCollapsed ? children : null}
    </View>
  );
}

const styles = StyleSheet.create({});

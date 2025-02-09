import { Alert, Share } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  JPY: "¥",
  CAD: "C$",
  AUD: "A$",
  CNY: "¥",
  // Add more as needed
};

export const formatPrice = (currencyCode: string, price: number): string => {
  const symbol = currencySymbols[currencyCode] || currencyCode; // Fallback to code if not found
  return `${symbol}${price?.toFixed(2)}`;
};

export const onShare = async ({ message }: { message: string }) => {
  try {
    const result = await Share.share({
      message:
        message ||
        "React Native | A framework for building native apps using React",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      }
    }
  } catch (error) {
    Alert.alert((error as Error).message);
  }
};

export const formatDimensionKey = (key: string) => {
  // Insert spaces before capital letters and convert the first letter to uppercase
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

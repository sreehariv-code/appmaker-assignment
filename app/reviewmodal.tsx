import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { useState } from "react";
import StarRatingComponent from "@/components/StarRatingComponent";
import StyledInput from "@/components/StyledInput";
import { fontStyle } from "@/constants/font";
import { router } from "expo-router";

export default function ReviewModal() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!rating || !name || !email || !review) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Add your API call here to submit the review

      Alert.alert("Success", "Thank you for your review!", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text
          className="text-xl text-center"
          style={[fontStyle.ManropeSemibold]}
        >
          Write a Review
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <View className="p-4 space-y-6">
        <View className="items-center mb-5">
          <Text className="text-lg mb-2" style={[fontStyle.ManropeMedium]}>
            Rate your experience
          </Text>
          <StarRatingComponent
            rating={rating}
            onRatingChange={setRating}
            size={40}
          />
        </View>

        <View>
          <StyledInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View>
          <StyledInput
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <StyledInput
            placeholder="Write your review here..."
            value={review}
            onChangeText={setReview}
            multiline
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: "top" }}
          />
        </View>

        <TouchableOpacity
          className={`bg-primary p-4 rounded-lg ${
            isSubmitting ? "opacity-50" : ""
          }`}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text
            className="text-white text-center text-lg"
            style={[fontStyle.ManropeSemibold]}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

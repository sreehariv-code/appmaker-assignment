import { TextInput, TextInputProps } from "react-native";
import React from "react";

export default function StyledInput(props: TextInputProps) {
  return (
    <TextInput
      className="w-full p-3 rounded-lg bg-white border border-gray-200 mb-5 placeholder:text-primary"
      {...props}
    />
  );
}

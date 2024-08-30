import { TextInput, View } from "react-native";
import React from "react";

type TextInputProps = {
  placeHolderName?: any;
  placeHolderTextColor?: any;
  onChangeText?: any;
  value?: any;
  style?: any;
  keyboardType?: any;
  maxLength?: any;
};

const TextInputComponent = ({
  placeHolderName,
  placeHolderTextColor,
  onChangeText,
  value,
  style,
  keyboardType,
  maxLength,
}: TextInputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeHolderName}
        placeholderTextColor={placeHolderTextColor}
        onChangeText={onChangeText}
        value={value}
        style={style}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

export default TextInputComponent;

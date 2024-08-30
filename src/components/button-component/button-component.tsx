import { Pressable, Text, View } from "react-native";
import React from "react";

type ButtonProps = {
  onPress?: any;
  buttonContainer?: any;
  buttonText?: any;
  text?: any;
  disabled?: any;
};

const ButtonComponent = ({
  onPress,
  buttonContainer,
  text,
  disabled,
  buttonText,
}: ButtonProps) => {
  return (
    <View>
      <Pressable onPress={onPress} style={buttonContainer} disabled={disabled}>
        <Text style={buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

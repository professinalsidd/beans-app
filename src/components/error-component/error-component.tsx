import { Image, Text, View } from "react-native";
import React from "react";
import { ERROR_STYLE } from "./error-component.style";
import { IMAGES } from "../../constants/image-constants/images-constant";

type ErrorProps = {
  msg: any;
};

const ErrorComponent = ({ msg }: ErrorProps) => {
  return (
    <View style={ERROR_STYLE.container}>
      <Image source={IMAGES.sad} style={ERROR_STYLE.image} />
      <Text style={ERROR_STYLE.errorText}>{msg}</Text>
    </View>
  );
};

export default ErrorComponent;

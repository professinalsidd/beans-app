import { ActivityIndicator, View } from "react-native";
import React from "react";

const LoadingComponent = () => {
  return (
    <View>
      <ActivityIndicator color="green" size="large" />
    </View>
  );
};

export default LoadingComponent;

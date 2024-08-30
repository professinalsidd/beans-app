import { Pressable, Text, View } from "react-native";
import React from "react";
import { HEADER_STYLE } from "./Header-component.style";

type HeaderProps = {
  leftIcon?: any;
  heading?: any;
  leftRoute?: any;
};

const HeaderComponent = ({ leftIcon, heading, leftRoute }: HeaderProps) => {
  return (
    <View style={HEADER_STYLE.container}>
      <View
        style={{
          ...HEADER_STYLE.subContainer,
          marginLeft: leftIcon ? "5%" : "29%",
        }}
      >
        <Pressable onPress={leftRoute}>
          {leftIcon && <Text style={HEADER_STYLE.icon}>{leftIcon}</Text>}
        </Pressable>
        <Text style={HEADER_STYLE.heading}>{heading}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

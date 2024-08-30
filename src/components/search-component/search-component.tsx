import { Text, View, Image } from "react-native";
import React from "react";
import { SEARCH_STYLE } from "./search-component.style";
import { IMAGES } from "../../constants/image-constants/images-constant";

const SearchComponent = () => {
  return (
    <View style={SEARCH_STYLE.container}>
      <Image source={IMAGES.search} style={SEARCH_STYLE.image} />
      <Text style={SEARCH_STYLE.searchText}>Search something new...</Text>
    </View>
  );
};

export default SearchComponent;

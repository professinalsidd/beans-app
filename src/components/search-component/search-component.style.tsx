import { StyleSheet } from "react-native";

export const SEARCH_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "#000",
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

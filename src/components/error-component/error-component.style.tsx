import { StyleSheet } from "react-native";

export const ERROR_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  errorText: {
    color: "#000",
    fontSize: 20,
    marginTop: "2%",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

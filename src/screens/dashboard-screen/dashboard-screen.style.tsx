import { StyleSheet } from "react-native";

export const DASHBOARD_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#2596be",
  },
  subContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  mappingContainer: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#F9F5F6",
    elevation: 6, //
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
    width: 150,
    textAlign: "center",
  },
});

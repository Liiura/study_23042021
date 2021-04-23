import { StyleSheet } from "react-native";
import { fontSizes, colors } from "../../theme";

export default StyleSheet.create({
  logInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  ingrapesLogo: {
      height: 100,
      width: 100,
      resizeMode: "contain",
      marginBottom: 20
  },

  grapeBank: {
      fontSize: fontSizes.big,
      color: colors.purple,
      fontWeight: "bold",
      fontFamily: "gilroy-bold",
      marginBottom: 20
  },

  logInButton: {
    backgroundColor: colors.purple,
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20
  },

  logInText: {
    fontSize: fontSizes.medium,
    color: "white",
    fontFamily: "gilroy-bold"
  },

  forgotPassword: {
    fontFamily: "gilroy-bold"
  }


});

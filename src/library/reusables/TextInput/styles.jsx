import { StyleSheet, Dimensions } from "react-native";
import { colors, fontSizes } from "../../../theme";

export default StyleSheet.create({

    inputContainer: {
        width: "90%",
        justifyContent: "center",
        marginBottom: 20
    },

    textInput: {
        backgroundColor: colors.grey,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: "17%"
    },

    leftIcon: {
        position: "absolute",
        height: 35,
        width: 35,
        resizeMode: "contain",
        zIndex: 1,
        marginLeft: "3%"
    }
});

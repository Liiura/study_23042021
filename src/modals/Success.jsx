import React from "react";
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { RFValue } from "react-native-responsive-fontsize";
import SuccessIcon from "../assets/icons/success_icon.png";

const ModalSuccess = (props) => {
  const { visible, message, accept } = props;
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Image source={SuccessIcon} style={styles.icon} />
          <Text style={styles.textMessage}>{message}</Text>
          <TouchableOpacity
            delayPressIn={0}
            onPress={accept}
            style={[styles.largeButtonStyle, { width: "60%", marginTop: 10 }]}
          >
            <Text style={styles.textButtonWhite}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

ModalSuccess.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  accept: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  textMessage: {
    color: "gray",
    fontSize: RFValue(15),
    width: "90%",
    textAlign: "center",
  },

  icon: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },

  largeButtonStyle: {
    width: "100%",
    height: 45,
    borderRadius: 22,
    backgroundColor: "#54BDBE",
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonWhite: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFValue(15),
  },
});

export default ModalSuccess;

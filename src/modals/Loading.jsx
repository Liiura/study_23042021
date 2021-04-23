import React from 'react';
import {Modal, Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialIndicator} from 'react-native-indicators';
import { colors } from "../theme";

const ModalLoading = (props) => {
  const {visible} = props;
  return (
    <Modal visible={visible} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <MaterialIndicator color={colors.purple} size={40}/>
          <Text style={{color: '#626262', marginBottom: 15}}>
            Estamos cargando tu información
          </Text>
        </View>
      </View>
    </Modal>
  );
};

ModalLoading.propTypes = {
  visible: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default ModalLoading;

import React from 'react';
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import IconError from '../assets/icons/icon_error.png';

const ModalError = (props) => {
  const {errorVisible, errorMessage, accept} = props;
  return (
    <Modal visible={errorVisible} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Image source={IconError} style={styles.icon} />
          <Text style={{color: '#626262', marginBottom: 10, textAlign: 'center', width: '90%'}}>
            {errorMessage}
          </Text>
          <TouchableOpacity
            style={styles.accept}
            onPress={accept}
            delayPressIn={0}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>ACEPTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

ModalError.propTypes = {
  errorVisible: PropTypes.bool,
  errorMessage: PropTypes.string,
  accept: PropTypes.func,
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
    height: '25%',
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

  icon: {
    height: 50,
    width: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  accept: {
    height: 30,
    width: '50%',
    backgroundColor: 'red',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalError;

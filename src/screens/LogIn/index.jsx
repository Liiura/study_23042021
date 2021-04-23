import React, { useState } from "react";
import { Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import {
  validateUsername,
  validatePassword,
  validateEmptyFieldsLogin,
} from "../../library/helpers/regularValidations";
import { useSelector, useDispatch } from "react-redux";

import ModalLoading from "../../modals/Loading";
import TextInputReusable from "../../library/reusables/TextInput";
import styles from "./styles";

import IngrapesLogo from "../../assets/icons/ingrapes_logo.png";
import Username from "../../assets/icons/user.png";
import Password from "../../assets/icons/password.png";
import ModalError from "../../modals/ModalError";

import { toggleError, fetchSignIn } from "../../redux/SignIn/action";

const LogIn = () => {
  const { loading, error, errorMessage } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (email) => setLogin({ ...login, email });
  const handlePassword = (password) => setLogin({ ...login, password });
  const handleToggleError = () => dispatch(toggleError(""));

  const submitLogIn = () => {
    const hasEmptyFields = validateEmptyFieldsLogin(login);
    if (hasEmptyFields) {
      return dispatch(toggleError("Complete todos los campos"));
    }

    const invalidUsername = validateUsername(login.email);
    if (invalidUsername) {
      return dispatch(toggleError("El usuario debe tener mínimo 8 caracteres"));
    }

    const isInvalidPassword = validatePassword(login.password);
    if (isInvalidPassword) {
      return dispatch(
        toggleError("La password debe tener mínimo 6 caracteres")
      );
    }

    dispatch(fetchSignIn(login))
  };

  return (
    <SafeAreaView style={styles.logInContainer}>
      <ModalLoading visible={loading} />
      <ModalError
        errorVisible={error}
        errorMessage={errorMessage}
        accept={handleToggleError}
      />
      <Image style={styles.ingrapesLogo} source={IngrapesLogo} />
      <Text style={styles.grapeBank}>GrapeBank</Text>
      <TextInputReusable
        placeholder="Username"
        leftIcon={Username}
        onChangeText={handleEmail}
      />
      <TextInputReusable
        placeholder="Password"
        leftIcon={Password}
        isPassword
        onChangeText={handlePassword}
        maxLength={10}
      />
      <TouchableOpacity style={styles.logInButton} onPress={submitLogIn}>
        <Text style={styles.logInText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogIn;

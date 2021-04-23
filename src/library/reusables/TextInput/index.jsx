import React from "react";
import { TextInput, View, Image } from "react-native";
import styles from "./styles";

const TextInputReusable = ({ leftIcon, placeholder, isPassword, onChangeText, maxLength }) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.leftIcon} source={leftIcon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

export default TextInputReusable;

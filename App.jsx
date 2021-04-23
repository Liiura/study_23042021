import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/theme";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  const [loaded] = useFonts(fonts);
  if (!loaded) {
    return <Text>Cargando</Text>;
  }

  return <AppNavigation />;
}

import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { colors, toggleTheme, theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Mini Tutorial RN
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={[styles.toggle, { color: colors.text }]}>🌓</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    elevation: 4,
  },
  menu: { fontSize: 24 },
  title: { fontSize: 18, fontWeight: "bold" },
  toggle: { fontSize: 24 },
});

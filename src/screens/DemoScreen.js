// src/screens/DemoScreen.js

import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DemoExample from "../components/DemoExample";

export default function DemoScreen() {
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Barra superior com toggle de tema */}
      <Header />

      <DemoExample />

      {/* Rodapé */}
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 16,
    padding: 0, // o padding já é interno no GradientCard
  },
});

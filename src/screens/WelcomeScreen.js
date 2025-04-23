// src/screens/WelcomeScreen.js

import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet, Image
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import GradientCard from "../components/GradientCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WelcomeScreen({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Barra superior com toggle de tema */}
      <Header />

      {/* Conteúdo rolável */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.header, { color: colors.primary }]}>
          Aprendendo React
        </Text>
        <Text style={[styles.subHeader, { color: colors.primary }]}>
          ADS 2025/1
        </Text>

        {/* Card “O que é?” */}
        <GradientCard colors={colors.cardGradient} style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('../imgs/iconreact.png')} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={[styles.cardTitle, { color: colors.background }]}>
                O que é?
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: colors.background, opacity: 0.9 },
                ]}
              >
                Saiba mais sobre RN
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.background }]}
              onPress={() => navigation.navigate("WhatIs")}
            >
              <Text style={[styles.buttonText, { color: colors.primary }]}>
                Saiba mais
              </Text>
            </TouchableOpacity>
          </View>
        </GradientCard>

        {/* Card “Lições” */}
        <GradientCard colors={colors.cardGradientReversed} style={styles.card}>
          <View style={styles.cardContent}>
          <Image source={require('../imgs/image 3.png')} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={[styles.cardTitle, { color: colors.background }]}>
                Lições
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: colors.background, opacity: 0.9 },
                ]}
              >
                Aprenda sobre React Native
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.background }]}
              onPress={() => navigation.navigate("Lessons")}
            >
              <Text style={[styles.buttonText, { color: colors.primary }]}>
                Conhecer
              </Text>
            </TouchableOpacity>
          </View>
        </GradientCard>

        {/* Card “Quiz” */}
        <GradientCard colors={colors.cardGradient} style={styles.card}>
          <View style={styles.cardContent}>
          <Image source={require('../imgs/image 2.png')} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={[styles.cardTitle, { color: colors.background }]}>
                Quiz
              </Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  { color: colors.background, opacity: 0.9 },
                ]}
              >
                Teste seus conhecimentos
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.background }]}
              onPress={() => navigation.navigate("Demo")}
            >
              <Text style={[styles.buttonText, { color: colors.primary }]}>
                Fazer
              </Text>
            </TouchableOpacity>
          </View>
        </GradientCard>
      </ScrollView>

      {/* Rodapé fixo */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40, // espaço antes do Footer
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    marginBottom: 16,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 2
  },
  icon: {
    fontSize: 36,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',  
    alignItems: 'center',     
    minWidth: 100,       
    marginLeft: 4     
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: 'center',   
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    paddingTop: -10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  }
});

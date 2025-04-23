// src/screens/WhatIsScreen.js

import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import GradientCard from "../components/GradientCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WhatIsScreen({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header com toggle de tema */}
      <Header />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Card superior “O que é?” */}
        <GradientCard colors={colors.cardGradient} style={styles.topCard}>
          <Image source={require('../imgs/iconreact.png')} style={styles.image}></Image>
          <Text style={[styles.topTitle, { color: colors.background }]}>
            O que é?
          </Text>
        </GradientCard>

        {/* Texto explicativo */}
        <View style={styles.section}>
          <Text style={[styles.paragraph, { color: colors.paragraph }]}>
          React Native (também conhecido como RN) é um estrutura de aplicativo móve popular, baseada na linguagem JavaScript, 
          que permite criar aplicativos móvei renderizados nativamente para iOS e Android. 
          A estrutura permite criar um aplicativo para várias plataformas usando a mesma base de código.
          </Text>
        </View>

        <View style={styles.sectionRow}>
          <Text style={[styles.paragraphIcon, { color: colors.paragraph }]}>
            O React Native foi lançado em 2015 pelo Facebook como um projeto de
            código aberto. Hoje é adotado por apps famosos como Discord,
            Instagram e Tesla.
          </Text>
        <Image source={require('../imgs/android.png')} style={styles.imagetx}></Image>
        </View>

        <View style={styles.sectionRow}>
        <Image source={require('../imgs/apple.png')} style={styles.imagetx}></Image>
          <Text style={[styles.paragraphIcon2, { color: colors.paragraph }]}>
            A estrutura renderiza componentes nativamente, garantindo
            performance e experiência de usuário próximas às apps nativas.
          </Text>
        </View>

        {/* Linha de “ícones” sociais */}
        <View style={styles.socialRow}>
        <Image source={require('../imgs/discord.png')} style={styles.imageic}></Image>
          <Text style={[styles.socialText, { color: colors.primary }]}>
            Discord
          </Text>
        <Image source={require('../imgs/tesla.png')} style={styles.imageic}></Image>
          <Text style={[styles.socialText, { color: colors.primary }]}>
            Tesla
          </Text>
        </View>

        <View style={styles.socialRow}>
          <Image source={require('../imgs/Group.svg')} style={styles.imageic}></Image>
            <Text style={[styles.socialText, { color: colors.primary }]}>
            Instagram
            </Text>
          <Image source={require('../imgs/Facebook.svg')} style={styles.imageic}></Image>
            <Text style={[styles.socialText, { color: colors.primary }]}>
              Facebook
            </Text>
        </View>
      </ScrollView>

      {/* Rodapé fixo */}
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40, // espaço antes do Footer
  },
  topCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  },
  topTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify"
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  osIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: "contain",
  },
  paragraphIcon: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left"
  },
  paragraphIcon2: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "right",
    marginLeft:2
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    paddingRight: 10
  },
  socialText: {
    fontSize: 12,
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
  },
  imagetx: {
    width: 25,
    height: 30,
    marginRight: 10,
    marginTop: 20
  },
  imageic:{
    width:15,
    height: 20, 
    marginRight: 10,
    marginLeft: 10,
    padding: 10
  },

});

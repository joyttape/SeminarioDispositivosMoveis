// src/screens/LessonsScreen.js

import React, { useContext } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LessonCard from "../components/LessonCard";
import { lessons } from "../data/lessons";

export default function LessonsScreen() {
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Header />

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
        
          <LessonCard
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              code={item.code}
            />
        )}
      />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
  },
});

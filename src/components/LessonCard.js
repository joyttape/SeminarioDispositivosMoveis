import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function LessonCard({ title, subtitle, content, code }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.content}>{content}</Text>
      <ScrollView style={styles.codeContainer}>
        <Text style={styles.code}>{code}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginBottom: 10 },
  content: { fontSize: 14, marginBottom: 10 },
  codeContainer: { maxHeight: 150, backgroundColor: "#eee", padding: 10 },
  code: { fontFamily: "monospace", fontSize: 12 },
});

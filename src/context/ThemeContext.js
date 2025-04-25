// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

const palettes = {
  light: {
    background: "#FFFFFF",
    text: "#333333",
    primary: "#00CC7F",
    secondary: "#8A2BE2",
    cardGradient: ["#00F878", "#8A2BE2"],
    cardGradientReversed: ["#8A2BE2", "#00F878"],
    optionText: "#000000",
    color: "#05AF6F0",
    paragraph: "#0D6543",
    correct: "#00CC7F",
    correctBackground: "#CCF5E7",
    incorrect: "#FF5A5F",
    incorrectBackground: "#FDDCDC",
    finalText: "#121212",
    bt1: "#8A2BE2",
    bt2: "#00F878",
    question: "#00F878",
    finalText: "#0A8EBE",
    question: "#00CC7F"
  },
  dark: {
    background: "#121212",
    text: "#FFFFFF",
    primary: "#0A8EBE",
    secondary: "#FFFFFF",
    cardGradient: ["#76CEEE", "#0A8EBE"],
    cardGradientReversed: ["#29A8A2", "#696FD8"],
    optionText: "#FFFFFF",
    paragraph: "#0A8EBE",
    correct: "#00F878",
    incorrect: "#FF5A5F",
    bt1: "#0A8EBE",
    bt2: "#696FD8",
    question: "#0A8EBE",
  },
};

export function ThemeProvider({ children }) {
  const sys = Appearance.getColorScheme() || "light";
  const [theme, setTheme] = useState(sys);

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) =>
      setTheme(colorScheme || "light")
    );
    return () => sub.remove();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const colors = palettes[theme];

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

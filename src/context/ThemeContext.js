// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

const palettes = {
  light: {
    background: "#FFFFFF",
    text: "#333333",
    primary: "#00F878",
    secondary: "#8A2BE2",
    cardGradient: ["#00F878", "#8A2BE2"],
    cardGradientReversed: ["#8A2BE2", "#00F878"],
    optionText: "#000000",
    color: "05AF6F0",
    paragraph: "#0D6543",
    correct: "#00CC7F",
    correctBackground: "#CCF5E7",
    incorrect: "#FF5A5F",
    incorrectBackground: "#FDDCDC",
    finalText: "#121212"
  },
  dark: {
    background: "#121212",
    text: "#FFFFFF",
    primary: "#00F878",
    secondary: "#FFFFFF",
    cardGradient: ["#00EE96", "#00D182"],
    cardGradientReversed: ["#29A8A2", "#696FD8"],
    optionText: "#FFFFFF",
    paragraph: "#00CC7F",
    correct: "#00F878",
    incorrect: "#FF5A5F"
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

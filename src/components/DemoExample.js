import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Audio } from "expo-av"; // aqui estamos importando o modulo de audio

const questions = [
  {
    question: "O que é React Native?",
    options: [
      "Um framework para web apenas",
      "Uma biblioteca de componentes para desktop",
      "Um framework para apps móveis usando JavaScript",
      "Uma linguagem de programação",
    ],
    answerIndex: 2,
  },
  {
    question: "Qual hook usamos para estado em componentes funcionais?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answerIndex: 1,
  },
  {
    question: "Como estilizamos componentes?",
    options: [
      "Com CSS externo",
      "Com inline styles",
      "Com StyleSheet.create",
      "Nenhuma das anteriores",
    ],
    answerIndex: 2,
  },
  {
    question: "Qual é a principal vantagem de usar React Native em comparação com o desenvolvimento nativo tradicional para iOS e Android??",
    options: [
      "Melhor desempenho em tarefas complexas.",
      "Maior acesso a recursos específicos do dispositivo.",
      "Capacidade de escrever código uma vez e executar em ambas as plataformas.",
      "Interfaces de usuário mais ricas e personalizadas.",
    ],
    answerIndex: 2,
  },
  {
    question: "O que são props e state em um componente React Native?",
    options: [
      "São duas palavras diferentes que significam a mesma coisa.",
      "Props são informações enviadas de um componente para outro, e state são informações que mudam dentro do próprio componente.",
      "Props servem para mudar o estilo do componente, e state serve para mudar a cor.",
      "Props podem ser mudados dentro do componente, e state não pode mudar.",
    ],
    answerIndex: 1,
  },
  {
    question: "Pra que serve o useState no React Native?",
    options: [
      "Serve para fazer chamadas de API no componente.",
      "Serve para mudar o estilo do componente.",
      "Serve para passar informações de um componente pai para um filho.",
      "Serve para guardar informações que mudam enquanto o app está rodando, como um contador.",
    ],
    answerIndex: 3,
  }
];

export default function DemoExample() {
  const { colors } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Função que vai tocar o som
  const playCorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../audios/acertoduolingo.mp3") 
    );
    await sound.playAsync();
  };

  const playIncorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../audios/incorreto.mp3") 
    );
    await sound.playAsync();
  };

  const playFinishSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../audios/completo.mp3") 
    );
    await sound.playAsync();
  };

  const handleOptionPress = async (index) => {
    setSelected(index);
    if (index === questions[current].answerIndex) {
      setScore(score + 1);
      await playCorrectSound();
    } else {
      await playIncorrectSound();
    }
  };

  const handleNext = async () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
    } else {
      await playFinishSound();
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <View style={styles.containerfinish}>
        <Image source={require('../imgs/image 4.png')} style={styles.image}></Image>
        <Text style={[styles.finalText, { color: colors.finalText }]}>Quiz concluído!</Text>
        <Text style={[styles.finalText, { color: colors.finalText }]}>
          Você acertou {score} de {questions.length}
        </Text>
      </View>
    );
  }

  const q = questions[current];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{q.question}</Text>

      {q.options.map((opt, i) => {
        const isCorrect = i === q.answerIndex;
        const isSelected = selected !== null && i === selected;

        const getOptionStyle = () => {
          let baseStyle = { ...styles.option, borderColor: "#ccc", backgroundColor: "transparent" };

          if (selected !== null) {
            if (isCorrect) {
              baseStyle = {
                ...baseStyle,
                borderColor: colors.correct,
                backgroundColor: colors.correctBackground,
              };
            } else if (isSelected) {
              baseStyle = {
                ...baseStyle,
                borderColor: colors.incorrect,
                backgroundColor: colors.incorrectBackground,
              };
            }
          }
          return baseStyle;
        };

        return (
          <TouchableOpacity
            key={i}
            style={getOptionStyle()}
            onPress={() => selected === null && handleOptionPress(i)}
          >
            <Text style={[styles.optionText, { color: colors.optionText }]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}

      {selected !== null && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {current < questions.length - 1 ? "Próxima" : "Ver Resultado"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  question: {
    color: "#00CC7F",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#ccc",
    marginBottom: 12
  },
  selectedOption: {
    borderColor: "#00CC7F",
    borderWidth: 3,
    bordersize: 2
  },
  optionText: {
    fontSize: 16
  },
  nextButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  nextText: {
    fontSize: 16,
    color: "#FFFFFF",
    backgroundColor: "#00CC7F",
    borderRadius: 7,
    padding: 10
  },
  finalText: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    color: "#00F878"
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 16,
    paddingTop: -10,
  },
  containerfinish: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  }
});

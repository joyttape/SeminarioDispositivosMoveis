export const lessons = [
  {
    id: "0",
    title: "Introdução ao Tutorial",
    subtitle: "Aprenda React Native do zero",
    content:
      "Neste mini tutorial, você aprenderá os fundamentos do React Native por meio de exemplos simples e práticos. Ideal para quem está começando!"
  },
  {
    id: "1",
    title: "O que é React Native",
    subtitle: "Estrutura para apps móveis em JavaScript",
    content:
      "React Native é um framework que permite criar aplicativos móveis para iOS e Android usando a mesma base de código em JavaScript.",
    code: "import React from 'react'\nimport { Text } from 'react-native'\n\nexport default function App() {\n  return <Text>Olá, React Native!</Text>\n}"
  },
  {
    id: "2",
    title: "Componentes Básicos",
    subtitle: "View, Text, TextInput, Button...",
    content:
      "React Native fornece vários componentes básicos para estruturar e estilizar sua interface.",
    code: "import React from 'react'\nimport { View, Text } from 'react-native'\n\nexport default function Hello() {\n  return (\n    <View>\n      <Text>Componente View</Text>\n    </View>\n  )\n}"
  },
  {
    id: "3",
    title: "States e Props",
    subtitle: "Gerenciamento de estados e propriedades",
    content:
      "State é usado para dados mutáveis dentro de um componente. Props permitem passar valores entre componentes.",
    code: "import React, { useState } from 'react'\nimport { View, Text, Button } from 'react-native'\n\nexport default function Counter() {\n  const [count, setCount] = useState(0)\n  return (\n    <View>\n      <Text>Count: {count}</Text>\n      <Button title='Incrementar' onPress={() => setCount(count + 1)} />\n    </View>\n  )\n}"
  },
  {
    id: "4",
    title: "Estilização Simples",
    subtitle: "StyleSheet e inline styles",
    content:
      "Use `StyleSheet.create` para definir estilos reutilizáveis e inline styles para ajustes rápidos.",
    code: "import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nconst styles = StyleSheet.create({\n  box: { padding: 10, backgroundColor: '#eee' }\n})\n\nexport default function StyledBox() {\n  return (\n    <View style={styles.box}>\n      <Text>Caixa estilizada</Text>\n    </View>\n  )\n}"
  },
  {
    id: "5",
    title: "Próximos Passos",
    subtitle: "Navegação, APIs e mais",
    content:
      "Agora que você conhece os fundamentos, explore:\n\n- React Navigation para navegação entre telas\n- Axios ou Fetch para consumir APIs\n- FlatList para listas dinâmicas\n- Organização de arquivos e boas práticas\n\nContinue praticando e criando!",
    code: ""
  }
];

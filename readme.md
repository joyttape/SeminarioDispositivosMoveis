Mini Tutorial React Native (Web Simulation)

Um aplicativo educacional web que simula um tutorial de React Native, desenvolvido com Expo e React Navigation. Ideal para aprender conceitos básicos de React Native de forma interativa, sem necessidade de emulação de dispositivo móvel.

🚀 Funcionalidades

📱 Tela de Boas-vindas com navegação para conteúdo teórico e quiz interativo

📖 Tela “O que é?” explicando o que é React Native, com texto e ícones via emojis

📚 Tela de Lições listando módulos teóricos ("O que é React Native", "Componentes Básicos", "States e Props", "Estilização Simples")

❓ Quiz Interativo em formato de múltipla escolha para testar conhecimentos

🎨 Cartões em Gradiente usando expo-linear-gradient

🚀 Navegação Simples com @react-navigation/native e Stack Navigator

📝 Estilos Globais via StyleSheet e tema simples em src/styles/theme.js

📋 Pré-requisitos

Node.js >= 14.x

npm >= 6.x ou yarn >= 1.22.x

Expo CLI instalado globalmente:

mini-tutorial-react-native-web/
├── App.js
├── package.json
├── assets/ # (vazio no web) / imagens estáticas
└── src/
├── components/ # Componentes reutilizáveis (LessonCard, GradientCard, DemoExample)
├── data/ # Dados estáticos (lessons.js)
├── navigation/ # Configuração de rotas (AppNavigator)
├── screens/ # Telas do app (Welcome, WhatIs, Lessons, Demo)
└── styles/ # Estilos globais e tema (theme.js)

├── package.json
├── assets/ # (vazío no web) / imagens estáticas
└── src/
├── components/ # Componentes reutilizáveis (LessonCard, GradientCard, DemoExample)
├── data/ # Dados estáticos (lessons.js)
├── navigation/ # Configuração de rotas (AppNavigator)
├── screens/ # Telas do app (Welcome, WhatIs, Lessons, Demo)
└── styles/ # Estilos globais e tema (theme.js)

🎨 Principais Componentes

GradientCard: wrapper de <LinearGradient> para criar cartões com gradiente

LessonCard: exibe título, subtítulo, texto e código em scroll

DemoExample: quiz interativo ou exemplo de input controlado

🔄 Navegação

Utiliza @react-navigation/native e @react-navigation/native-stack com as seguintes rotas:

Welcome: tela inicial com três cartões

WhatIs: explicação teórica sobre o que é React Native

Lessons: lista de lições teóricas em cartões com gradiente

Demo: quiz interativo para testar conhecimentos

🤝 Contribuindo

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/NovaFeature)

Commit suas mudanças (git commit -m 'Add: Nova feature')

Push para a branch (git push origin feature/NovaFeature)

Abra um Pull Request

Para mais detalhes, consulte nosso Guia de Contribuição.

📝 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE.md para mais informações.

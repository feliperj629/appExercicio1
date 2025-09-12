# 📱 App Exercício 1 - React Native com Expo

Um projeto prático para aprender os fundamentos do React Native usando Expo, com exercícios progressivos para desenvolver habilidades em desenvolvimento mobile.

> 📚 **Material Educacional**: Este projeto foi desenvolvido especificamente para atividades práticas em sala de aula, servindo como material de apoio para o ensino de desenvolvimento mobile com React Native e Expo.

## 🎯 Objetivos

- ✅ Criar um projeto React Native com Expo (template blank)
- ✅ Construir uma tela inicial com componentes básicos
- ✅ Executar o app no celular ou emulador
- ✅ Versionar e enviar para o GitHub
- ✅ Incrementar o app com novos exercícios

## 🚀 Configuração Inicial

### Pré-requisitos

- Node.js instalado
- Expo CLI (`npm install -g @expo/cli`)
- App Expo Go no celular (iOS/Android)

### 1. Criar o Projeto

```bash
# Criar projeto com template blank
npx create-expo-app --template blank appExercicio1

# Entrar na pasta do projeto
cd appExercicio1

# Instalar dependências para web (opcional)
npx expo install react-dom react-native-web

# Abrir no VS Code
code .

# Iniciar o projeto
npx expo start
```

### 2. Código Base do App.js

Substitua o conteúdo do arquivo `App.js` pelo seguinte código:

```javascript
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao appExercicio1!</Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          width: "80%",
          marginBottom: 20,
        }}
      />

      <Button title="Mostrar mensagem" onPress={() => setMensagem(`Olá, ${nome}!`)} />

      {mensagem ? <Text style={{ marginTop: 20, fontSize: 18 }}>{mensagem}</Text> : null}
    </View>
  );
}
```

### 3. Executar o App

```bash
# Iniciar o servidor de desenvolvimento
npx expo start
```

- 📱 **Mobile**: Escaneie o QR Code com o app Expo Go
- 🌐 **Web**: Pressione `w` para abrir no navegador
- 📺 **Emulador**: Pressione `a` (Android) ou `i` (iOS)

## 📝 Versionamento com Git

### Configuração Inicial

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Versão inicial do appExercicio1"
```

### Enviar para GitHub

1. Criar repositório no GitHub chamado `appExercicio1`
2. Conectar e enviar:

```bash
git remote add origin https://github.com/SEU_USUARIO/appExercicio1.git
git branch -M main
git push -u origin main
```

## 🎮 Exercícios de Incremento

### Exercício 1 - Botão de Limpar
**Objetivo**: Criar um botão "Limpar" que apague o nome digitado e a mensagem.

**Dica**: Use `setNome("")` e `setMensagem("")`.

### Exercício 2 - Contador de Cliques
**Objetivo**: Criar um contador que mostre quantas vezes o botão "Mostrar mensagem" foi clicado.

**Dica**: Use `useState` para guardar o valor e incremente no `onPress`.

### Exercício 3 - Alterar Cor de Fundo
**Objetivo**: Criar um botão "Mudar Cor" que alterne a cor de fundo da tela entre branco e azul-claro.

**Dica**: Use `useState` para armazenar a cor e aplique no `style` da `View`.

## 🏆 Desafio Final

**Objetivo**: Criar uma lista (com `FlatList`) que guarde todos os nomes digitados ao clicar em "Mostrar mensagem".

**Funcionalidades**:
- Mostrar na tela o histórico de nomes usados
- Implementar navegação entre telas
- Adicionar persistência de dados

## 📚 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **JavaScript** - Linguagem de programação
- **Git** - Controle de versão

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ usando React Native e Expo**
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [contar, setContar] = useState(0);
  const [cor, setCor] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: cor ? cor : "" }]}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao appExercicio1!</Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Button title="Mostrar mensagem"
        onPress={() => {
          setMensagem(`Olá, ${nome}!`);
          setContar(contar + 1);
        }
        }
      />

      {mensagem ? <Text style={styles.text}>{mensagem} {contar}</Text> : null}


      <Button title="Limpar"
        onPress={() => { setNome(""); setMensagem(""); }} />

      <TextInput
        placeholder="Digite uma cor:"
        value={cor}
        onChangeText={setCor}
        style={styles.input}
      />

      {cor ? <Text style={styles.text}>{cor} </Text> : null}


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18
  },
});
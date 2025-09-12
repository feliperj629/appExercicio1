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
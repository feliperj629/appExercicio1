import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function App() {
  // Estado principal
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Exercício 2: contador de cliques
  const [contador, setContador] = useState(0);

  // Exercício 3: cor de fundo
  const [corFundo, setCorFundo] = useState("#fff");

  // Função para mostrar mensagem
  const mostrarMensagem = () => {
    if (nome.trim() !== "") { // evita mensagem vazia
      setMensagem(`Olá, ${nome}!`);
      setContador(contador + 1); // incrementa contador (Exercício 2)
    } else {
      setMensagem("Digite um nome antes!");
    }
  };

  // Função para limpar campo e mensagem (Exercício 1)
  const limpar = () => {
    setNome("");
    setMensagem("");
    setContador(0); // opcional: resetar contador também
  };

  // Função para alterar cor de fundo (Exercício 3)
  const mudarCor = () => {
    setCorFundo(corFundo === "#fff" ? "#add8e6" : "#fff"); // alterna branco e azul-claro
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: corFundo }}>
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

      {/* Botão para mostrar mensagem */}
      <Button title="Mostrar mensagem" onPress={mostrarMensagem} />

      {/* Botão para limpar campo e mensagem */}
      <View style={{ marginTop: 10, width: "60%" }}>
        <Button title="Limpar" color="#f44336" onPress={limpar} />
      </View>

      {/* Botão para mudar cor de fundo */}
      <View style={{ marginTop: 10, width: "60%" }}>
        <Button title="Mudar Cor" color="#2196f3" onPress={mudarCor} />
      </View>

      {/* Mensagem exibida */}
      {mensagem ? <Text style={{ marginTop: 20, fontSize: 18 }}>{mensagem}</Text> : null}

      {/* Contador de cliques (Exercício 2) */}
      <Text style={{ marginTop: 10, fontSize: 16 }}>Você já clicou {contador} vezes!</Text>
    </View>
  );
}

import { useState } from "react";
import { Text, View, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function App() {
  // Estado principal
  const [nome, setNome] = useState("");

  // Estado para guardar os nomes digitados
  const [nomes, setNomes] = useState([]);

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
      setNomes([...nomes, nome]); // adiciona nome ao array
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
  // Função para limpar lista (Exercício 4)
  const limparLista = () => {
    setNomes([]);
  };

  // Função para alterar cor de fundo (Exercício 3)
  const mudarCor = () => {
    setCorFundo(corFundo === "#fff" ? "#add8e6" : "#fff"); // alterna branco e azul-claro
  };

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={styles.title}>Bem-vindo ao appExercicio1!</Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      {/* Botão para mostrar mensagem */}
      <Button title="Mostrar mensagem" onPress={mostrarMensagem} />

      {/* Botão para limpar campo e mensagem */}
      <View style={styles.button}>
        <Button title="Limpar" color="#f44336" onPress={() => { limpar(); limparLista(); }} />
      </View>

      {/* Botão para mudar cor de fundo */}
      <View style={styles.button}>
        <Button title="Mudar Cor" color="#2196f3" onPress={mudarCor} />
      </View>

      {/* Mensagem exibida */}
      {mensagem ? <Text style={styles.message}>{mensagem}</Text> : null}

      {/* Contador de cliques (Exercício 2) */}
      <Text style={styles.counter}>Você já clicou {contador} vezes!</Text>


      {/* Lista de nomes (Exercício 4) */}
      {nomes.length > 0 && (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Desafio 4: Mostrar todos os nomes digitados.</Text>
          <FlatList
            data={nomes}
            renderItem={({ item }) => <Text style={styles.listItemText}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
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
  listContainer: {
    marginTop: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  listItem: {
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: "60%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
  counter: {
    marginTop: 10,
    fontSize: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

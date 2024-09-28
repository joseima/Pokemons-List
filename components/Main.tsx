import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { usePokemons } from "../hooks/usePokemons";
import { Pokemon } from "../types";
import { AnimatedPokemonCard } from "./PokemonCard";

export const Main: React.FC = () => {
  const { pokemons, loading } = usePokemons();

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.title}>Loading pokemons...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList<Pokemon>
        data={pokemons}
        numColumns={3}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item, index }) => (
          <AnimatedPokemonCard pokemon={item} index={index} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff742f",
    marginTop: 10,
  },
  container: {
    backgroundColor: "#242424",
    paddingHorizontal: 20,
  },
});

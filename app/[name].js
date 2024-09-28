import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { usePokemons } from "../hooks/usePokemons";

export default function Detail() {
  const { name } = useLocalSearchParams();
  const { pokemons } = usePokemons();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const selectedPokemon = pokemons.find((pokemon) => pokemon.name === name);
    if (selectedPokemon) {
      setPokemon(selectedPokemon);
    }
  }, [name, pokemons]);

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.title}>Loading {name} details</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.types}>
        Type:
        {pokemon.types.map((type, index) =>
          index < pokemon.types.length - 1 ? ` ${type}, ` : type,
        )}
      </Text>
      <View></View>
      <Link style={styles.details} href="/">
        Back to list
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#242424",
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 10,
    backgroundColor: "#522a81",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
    textTransform: "uppercase",
  },
  types: {
    fontSize: 16,
    color: "#91ff2f",
  },
  details: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff742f",
    padding: 5,
    marginTop: 10,
  },
});

import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Link } from "expo-router";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

interface AnimatedPokemonCardProps {
  pokemon: Pokemon;
  index: number;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <View key={pokemon.name} style={styles.card}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />

      <Text style={styles.title}>{pokemon.name}</Text>
      <Text style={styles.types}>
        {pokemon.types.map((type, index) =>
          index < pokemon.types.length - 1 ? `${type}, ` : type,
        )}
      </Text>
      <Link style={styles.details} href={pokemon.name}>
        Details
      </Link>
    </View>
  );
}

export function AnimatedPokemonCard({
  pokemon,
  index,
}: AnimatedPokemonCardProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <PokemonCard pokemon={pokemon} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    margin: 0,
  },
  types: {
    fontSize: 16,
    color: "#91ff2f",
  },
  details: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
    backgroundColor: "#522a81",
    textAlign: "center",
    borderRadius: 20,
    marginTop: 10,
    width: "70%",
  },
});

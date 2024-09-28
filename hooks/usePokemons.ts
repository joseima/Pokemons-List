import { useState, useEffect } from "react";
import { MMKV } from "react-native-mmkv";
import { Pokemons } from "../types";
import { getPokemons as fetchPokemons } from "../lib/services/pokeApi";

const storage = new MMKV();

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndStorePokemons = async () => {
      try {
        const storedData = storage.getString("pokemons");
        if (storedData) {
          setPokemons(JSON.parse(storedData));
          setLoading(false);
        } else {
          const fetchedPokemons = await fetchPokemons();
          setPokemons(fetchedPokemons);
          storage.set("pokemons", JSON.stringify(fetchedPokemons));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching or saving data:", error);
      }
    };

    fetchAndStorePokemons();
  }, []);

  return { pokemons, loading };
};

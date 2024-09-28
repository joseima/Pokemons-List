import { API_URL } from "./url";
import { Pokemons } from "../types";

export const getPokemons = async (): Promise<Pokemons[]> => {
  try {
    const resp = await fetch(`${API_URL}?limit=100`);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    }
    const json = await resp.json();
    const pokemonList = json.results;

    const detailedPokemons = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const detailResp = await fetch(pokemon.url);
        const detailJson = await detailResp.json();

        return {
          name: pokemon.name,
          url: pokemon.url,
          image: detailJson.sprites.front_default,
          types: detailJson.types.map((t: any) => t.type.name),
        };
      }),
    );

    return detailedPokemons;
  } catch (error) {
    console.error("Error al obtener los Pokémons:", error);
    return [];
  }
};

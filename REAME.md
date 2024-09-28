Pokemons list with React Native / Expo

Documentación :

Descripción general de la aplicación

La aplicación muestra una lista de Pokémon obtenidos de la API PokeAPI. Cada Pokémon en la lista muestra su nombre, imagen y tipos. Al seleccionar un Pokémon, se muestra una pantalla de detalle con la imagen y más información sobre el Pokémon. Los datos obtenidos de la API se almacenan localmente usando react-native-mmkv para evitar hacer consultas repetidas.

Estructura de carpetas:

App:
Estructura de navegación requerido para Expo Router
_layout.js: Lyout que engloba el total de la aplicación
index.js: Vista de entrada a la aplicación que carga el componente Main
[name].js: Ruta dinámica pra mostrar los detalles del pokemon selecciondo 


Componentes:
Main.tsx: Pantalla principal que muestra la lista de Pokémons.
PokemonCard.tsx: Card ded cada pokemon

Libs/Services
pokeApi.ts: Archivo donde se realiza el fetch a la PokeAPI y se almacena la información usando MMKV.

Hooks:
usePokemons.ts: Hook personalizado para gestionar el estado de los Pokémons y los datos almacenados llamando a la librería pokeApi.

Tipos:
types.ts: Archivo con las interfaces y tipos usados en la aplicación.

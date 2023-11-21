
export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await response.json();
  return pokemon;
}
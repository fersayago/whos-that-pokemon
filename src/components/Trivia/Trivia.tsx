import { useState, useEffect } from "react";
import { fetchRandomPokemon } from "../../utils/fetchPokemon";
import Finished from "../Finished/Finished";
import Guess from "../Guess/Guess";
import PokemonImg from "../PokemonImg/PokemonImg";
import { IPokemon } from "../../interface/IPokemon";
import { GameStatus } from "../../types/types";

const Trivia = () => {
  const [score, setScore] = useState<number[]>([0, 0]);
  const [state, setState] = useState<GameStatus>("loading");
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const fetchNextPokemon = () => {
    setState('loading');
    fetchRandomPokemon()
      .then((pokemon) => {
        setPokemon(pokemon);
        setState('playing')
      })
      .catch((error) => {
        console.error('Failed to fetch a random Pokemon:', error);
        setState('error');
      });
  }

  const nextPokemon = () => {
    fetchNextPokemon();
  };

  useEffect(() => {
    fetchNextPokemon();
  }, []);

  if (state === "loading") {
    return <i className="nes-octocat animate"></i>;
  }

  if (state === "error" || !pokemon) {
    return <p>Failed to load Pokemon</p>;
  }

  return (
    <>
      <p>Who's that pokemon?</p>

      <PokemonImg pokemon={pokemon} />

      {state === "playing" ? (
        <Guess name={pokemon.name} setScore={setScore} setState={setState} />
      ) : (
        <Finished state={state} name={pokemon.name} nextPokemon={nextPokemon} />
      )}
      <p>Score:</p>
      <p>
        win: {score[0]} - lose: {score[1]}
      </p>
    </>
  );
};

export default Trivia;

import { useState } from 'react';
import Finished from '../Finished/Finished';
import Guess from '../Guess/Guess';
import PokemonImg from '../PokemonImg/PokemonImg';
import { IPokemon } from '../../interface/IPokemon';

const examplePokemon: IPokemon = {
  name: "ditto",
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  }
}

const Trivia = () => {

  const [score, setScore] = useState<number[]>([0, 1])
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [pokemon, setPokemon] = useState<IPokemon>(examplePokemon)

  return (
    <>
      <p>Who's that pokemon</p>

      <PokemonImg pokemon={pokemon} />

      {
        isPlaying
          ? <Guess
              name={pokemon.name}
              setScore={setScore}
              setIsPlaying={setIsPlaying}
            />
          : <Finished />
      }
      <p>Score:</p>
      <p>win: {score[0]} - lose: {score[1]}</p>
    </>
  )
}

export default Trivia
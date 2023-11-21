import React from 'react';
import { IPokemon } from '../../interface/IPokemon';

interface PokemonImgProps {
  pokemon: IPokemon;
}

const PokemonImg: React.FC<PokemonImgProps> = ({ pokemon }) => {
  const { name, sprites } = pokemon;

  return (
    <>
      <img
        src={sprites.front_default}
        alt={name}
      />
    </>
  );
};

export default PokemonImg;
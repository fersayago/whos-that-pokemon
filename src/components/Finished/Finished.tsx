import { useKeydown } from "../../hooks/useKeydown";
import { GameStatus } from "../../types/types";

interface FinishedProps {
  state: GameStatus;
  name: string;
  nextPokemon: () => void;
}

const Finished: React.FC<FinishedProps> = ({ state, name, nextPokemon }) => {

  useKeydown('Enter', nextPokemon)

  return (
    <>
      {
        state === 'correct'
          ? <p className='nes-text is-success'>Correct! It's {name}</p>
          : <p className='nes-text is-error'>Incorrect! It's {name}</p>
      }
      <button
        onClick={nextPokemon}
        className='nes-btn is-primary'
      >
        Play again!
      </button>
    </>
  )
}

export default Finished
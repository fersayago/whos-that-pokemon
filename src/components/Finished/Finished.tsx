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
          ? <p>Correct! It's {name}</p>
          : <p>Incorrect! It's {name}</p>
      }
      <button onClick={nextPokemon}>Play again!</button>
    </>
  )
}

export default Finished
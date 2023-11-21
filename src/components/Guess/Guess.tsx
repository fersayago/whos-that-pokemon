import { useEffect, useRef, useState } from 'react';
import { GameStatus } from "../../types/types";

interface GuessProps {
  name: string
  setScore: React.Dispatch<React.SetStateAction<number[]>>;
  setState: React.Dispatch<React.SetStateAction<GameStatus>>;
}

const Guess: React.FC<GuessProps> = ({ name, setScore, setState }) => {
  const [answer, setAnswer] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [name])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setAnswer(e.target.value)
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (answer.toLowerCase() === name.toLowerCase()) {
      setScore((prevScore) => {
        return [prevScore[0] + 1, prevScore[1]]
      })
      setState('correct')
    } else {
      setScore((prevScore) => {
        return [prevScore[0], prevScore[1] + 1]
      })
      setState('incorrect')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Your answer"
        value={answer}
        onChange={handleOnChange}
      />
      <button>Guess</button>
    </form>
  )
}

export default Guess
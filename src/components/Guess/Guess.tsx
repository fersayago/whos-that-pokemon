import { useState } from "react"

interface GuessProps {
  name: string
  setScore: React.Dispatch<React.SetStateAction<number[]>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Guess: React.FC<GuessProps> = ({ name, setScore, setIsPlaying }) => {
  const [answer, setAnswer] = useState<string>('')

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
    } else {
      setScore((prevScore) => {
        return [prevScore[0], prevScore[1] + 1]
      })
    }

    setIsPlaying(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
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
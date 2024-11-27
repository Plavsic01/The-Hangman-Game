import { useEffect, useState } from 'react';
import HangmanFigure from './HandmanFigure';
import Button from '../ui/button/Button';

const Hangman = (props) => {
  const [foundLetters, setFoundLetters] = useState({});
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);
  const [gameOver, setGameOver] = useState({
    isGameOver: false,
    hasWon: false,
  });

  useEffect(() => {
    if (props.userGuess === undefined) {
      return;
    }
    if (props.wordToGuess.includes(props.userGuess)) {
      const lettersObj = numberOfOccurrences(props.userGuess);

      setFoundLetters((prevLetters) => {
        const foundLetters = { ...prevLetters, ...lettersObj };
        return foundLetters;
      });
    } else {
      setNumberOfMistakes((prevNumOfMistakes) => prevNumOfMistakes + 1);
    }
  }, [props.userGuess, props.wordToGuess]);

  useEffect(() => {
    if (checkIfGameOver()) {
      props.gameOver();
    }
  }, [foundLetters, numberOfMistakes]);

  useEffect(() => {
    if (props.resetHangman) {
      setNumberOfMistakes(0);
      setFoundLetters({});
      setGameOver({ isGameOver: false, hasWon: false });
    }
  }, [props.resetHangman]);

  const checkIfGameOver = () => {
    const numberOfLettersFound = Object.values(foundLetters).reduce(
      (acc, cv, indx) => acc + cv,
      0
    );

    if (
      numberOfMistakes < 6 &&
      numberOfLettersFound === props.wordToGuess.length
    ) {
      // WIN
      setGameOver({ isGameOver: true, hasWon: true });
      return true;
    }

    if (
      numberOfMistakes >= 6 &&
      numberOfLettersFound !== props.wordToGuess.length
    ) {
      // LOST
      setGameOver({ isGameOver: true, hasWon: false });
      return true;
    }

    return false;
  };

  const numberOfOccurrences = (letter) => {
    const obj = {};
    for (const char of props.wordToGuess) {
      if (char === letter) {
        obj[char] = (obj[char] || 0) + 1;
      }
    }
    return obj;
  };

  return (
    <main className="flex flex-col justify-center items-center my-5">
      <HangmanFigure
        numberOfMistakes={`${!props.resetHangman && numberOfMistakes}`}
      />

      {gameOver.isGameOver && gameOver.hasWon && (
        <h1 className="text-white press-start-2p-regular">🥳 GG You won!</h1>
      )}
      {gameOver.isGameOver && !gameOver.hasWon && (
        <div className="text-center">
          <h1 className="text-white press-start-2p-regular">
            🥺 Better luck next time!
          </h1>

          <h1 className="text-white press-start-2p-regular">
            Word was: "{props.wordToGuess}"
          </h1>
        </div>
      )}

      <div>
        {props.wordToGuess.split('').map((letter, idx) => {
          return (
            <Button
              className="mx-2 px-3 py-3 cursor-auto"
              key={idx}
              value={(foundLetters[letter] && letter) || '-'}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Hangman;

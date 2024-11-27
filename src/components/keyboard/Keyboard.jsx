import { useState } from 'react';
import Button from '../ui/button/Button';

const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keyboard = (props) => {
  const [clickedLetters, setClickedLetters] = useState([]);

  const userAttempt = (letter) => {
    setClickedLetters((prevLetters) => [...prevLetters, letter]);
    props.getLetter(letter);
  };

  const resetHandler = () => {
    setClickedLetters([]);
    props.reset();
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="grid grid-cols-10 justify-items-center gap-x-6">
          {englishAlphabet.slice(0, 20).map((char, idx) => (
            <div key={idx}>
              <Button
                value={char}
                getLetter={userAttempt}
                isGameOver={props.isGameOver}
                isClicked={clickedLetters.includes(char)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-6 justify-items-center gap-6">
          {englishAlphabet.slice(20, 26).map((char, idx) => (
            <div key={idx}>
              <Button
                value={char}
                getLetter={userAttempt}
                isGameOver={props.isGameOver}
                isClicked={clickedLetters.includes(char)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center my-5">
        <button
          style={{ backgroundColor: '#2f2e2e' }}
          className="text-white px-40 py-3 press-start-2p-regular"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Keyboard;

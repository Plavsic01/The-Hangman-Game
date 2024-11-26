import './App.css';
import Keyboard from './components/keyboard/Keyboard';
import Header from './components/header/Header';
import Hangman from './components/hangman/Hangman';
import { useState } from 'react';

const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const guessWords = [
  'Python',
  'JavaScript',
  'Java',
  'TypeScript',
  'PHP',
  'Swift',
  'Go',
  'Kotlin',
  'Ruby',
  'Rust',
  'Dart',
  'R',
  'Scala',
  'Shell',
  'Matlab',
  'Lua',
  'Perl',
  'Swift',
];

const randomGuessWord = () => {
  return guessWords[
    Math.floor(Math.random() * guessWords.length)
  ].toLowerCase();
};

const App = () => {
  const [userGuess, setUserGuess] = useState();
  const [guessWord, setGuessWord] = useState(randomGuessWord());
  const [gameOver, setGameOver] = useState(false);
  const [resetHangman, setResetHangman] = useState(false);

  const handleUserGuess = (guess) => {
    setUserGuess(guess);
    setResetHangman(false);
  };

  const handleResetHangman = () => {
    setGuessWord(randomGuessWord());
    setUserGuess('');
    setResetHangman(true);
    setGameOver(false);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  return (
    <>
      <Header />
      <Hangman
        wordToGuess={guessWord}
        userGuess={userGuess}
        resetHangman={resetHangman}
        gameOver={handleGameOver}
      />
      <Keyboard
        alphabet={englishAlphabet}
        getLetter={handleUserGuess}
        reset={handleResetHangman}
        isGameOver={gameOver}
      />
    </>
  );
};

export default App;

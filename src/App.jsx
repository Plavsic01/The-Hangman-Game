import './App.css';
import Keyboard from './components/keyboard/Keyboard';
import Hangman from './components/hangman/Hangman';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { useState } from 'react';

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
        getLetter={handleUserGuess}
        reset={handleResetHangman}
        isGameOver={gameOver}
      />
      <Footer />
    </>
  );
};

export default App;

import { Fragment } from 'react';
const HangmanFigure = (props) => {
  const mistakes = [
    <circle cx="120" cy="70" r="20" />,
    <line x1="120" y1="90" x2="120" y2="150" />,
    <line x1="120" y1="110" x2="100" y2="130" />,
    <line x1="120" y1="110" x2="140" y2="130" />,
    <line x1="120" y1="150" x2="100" y2="190" />,
    <line x1="120" y1="150" x2="140" y2="190" />,
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="250"
      viewBox="0 0 200 300"
      fill="none"
      stroke="white"
      strokeWidth="4"
    >
      {/* Hangman Stand */}
      <line x1="20" y1="280" x2="150" y2="280" /> {/* Base */}
      <line x1="50" y1="280" x2="50" y2="20" /> {/* Vertical line */}
      <line x1="50" y1="20" x2="120" y2="20" /> {/* Horizontal line */}
      <line x1="120" y1="20" x2="120" y2="50" /> {/* Rope */}
      {/* Body */}
      {mistakes.slice(0, props.numberOfMistakes).map((mistake, idx) => (
        <Fragment key={idx}> {mistake}</Fragment>
      ))}
    </svg>
  );
};

export default HangmanFigure;

import styles from './Button.module.css';

const Button = (props) => {
  const letterHandler = () => {
    if (!props.isClicked && !props.isGameOver) {
      props.getLetter(props.value);
    }
  };

  return (
    <>
      <button
        onClick={props.getLetter ? letterHandler : undefined}
        disabled={props.isClicked || props.isGameOver ? true : false}
        className={`${
          props.isClicked ? styles.disabled : styles.active
        } text-white press-start-2p-regular mt-7 px-7 py-5 ${props.className} `}
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;

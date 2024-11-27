const Footer = () => {
  return (
    <div
      style={{ backgroundColor: '#222222' }}
      className=" py-3 fixed bottom-0 left-0 right-0 rounded-lg outline outline-gray-700"
    >
      <div className="text-white italic text-center text-xs">
        Github:{' '}
        <a
          href="https://github.com/Plavsic01/The-Hangman-Game"
          title="The Hangman Game"
          target="_blank"
        >
          @Plavsic01/TheHangmanGame
        </a>
      </div>
    </div>
  );
};
export default Footer;

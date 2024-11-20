import React, { useState, useEffect, useRef } from 'react';
import './WordChanger.css';

const wordArray = ['a Coder', 'a Computer Science Student', 'Hardworking', 'Curious', 
  'a Badminton Player', 'a Gamer', 'Adventurous', 'Trilingual', 'Organized'];

const WordChanger = () => {
  const [currentWord, setCurrentWord] = useState('');
  const index = useRef(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = wordArray[index.current];
      
      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1)); // Deleting text
        setSpeed(55); // Faster speed when deleting
      } else {
        setText(fullWord.substring(0, text.length + 1)); // Typing text
        setSpeed(100); // Slower speed when typing
      }

      // When word is fully typed, start deleting
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false); // Start typing the next word
        index.current = (index.current + 1) % wordArray.length;
      }
    };

    const typingInterval = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingInterval); // Cleanup timeout
  }, [text, isDeleting, speed]);

  return (
    <div className="WordChanger">
      <h2 style={{fontSize: '70px', marginTop: '-100px'}}>
        {text}
        <span className="cursor">|</span>
      </h2>
    </div>
  );
};

export default WordChanger;

/* Reference: https://www.w3schools.com/react/react_usestate.asp 
https://www.geeksforgeeks.org/how-to-replace-text-with-css/ */

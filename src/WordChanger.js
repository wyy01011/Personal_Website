import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['a Coder', 'a 4th year Computer Science Student', 'Hardworking', 'Curious', 
	'a Badminton Player', 'a Gamer', 'Adventurous', 'Trilingual', 'Organized'];

const WordChanger = () => {
	const [currentWord, setCurrWord] = useState(wordArray[0]);
	const index = useRef(0);
	
		
        useEffect(() => {
            let interval = setInterval(() => {
              // Increment the index
              index.current = (index.current + 1) % wordArray.length;
              // Update the current word
              setCurrWord(wordArray[index.current]);
            }, 1000); // Change word every second
		return () => clearInterval(interval);
	});

	return (
		<div className="WordChanger">
			<h2 style={{ fontSize: '30px', marginBottom: '5px' }}>Hello, World!</h2>
			<h2 style={{ marginTop: '5px' }}>I am {currentWord}</h2>
		</div>
	);
};

export default WordChanger;

/* ref = https://medium.com/@swardkm/react-word-changing-component-c8f29827e8bb#4fea*/
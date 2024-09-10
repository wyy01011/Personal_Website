import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['Coder', 'Student', 'Hard Worker', 'Runner', 'Curious Person', 'Badminton Player', 'Gamer'];

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
			<h2>I am a {currentWord}</h2>
		</div>
	);
};

export default WordChanger;

/* ref = https://medium.com/@swardkm/react-word-changing-component-c8f29827e8bb#4fea*/
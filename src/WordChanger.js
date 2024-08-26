import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['Books', 'Food', 'Electronics', 'Everything.'];

const WordChanger = () => {
	const [currWord, setCurrWord] = useState(wordArray[0]);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
				setCurrWord(wordArray[index.current]);
				if (index.current === wordArray.length - 1) {
					setIsActive(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	});

	return (
		<div style={{textAlign: "center"}}>
			<h2>We sell</h2>
			<h1>{currWord}</h1>
		</div>
	);
};

export default WordChanger;

/* ref = https://medium.com/@swardkm/react-word-changing-component-c8f29827e8bb#4fea*/
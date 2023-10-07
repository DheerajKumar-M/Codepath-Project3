import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

function FlashcardDeck({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCorrect, setAnswer] = useState(false);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const previousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const defaultStyle = {
    margin: '40px',
    height: '30px',
    width: '250px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '5px',
  };

  // Define conditional styles
  const inputStyles = {
    ...defaultStyle,
    borderColor: isCorrect ? 'green' : 'red',
  };

  const checkAnswer = () => {
    var f = document.getElementById('ans').value;
    console.log(f);
    if (f === '') {
      setAnswer(false);
      console.log("I am in If");
    } else {
      if (f.toLowerCase() === cards[currentCardIndex].answer.toLowerCase()) {
        console.log("I am else-if");
        setAnswer(true);
      } else {
        setAnswer(false);
        console.log(isCorrect);
      }
    }
  };

  return (
    <div className="flashcard-deck">
      <div>
        <Flashcard
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
        />
      </div>
      <div>
        <p>Guess the answer here:</p>
        <input style={inputStyles} type="text" id="ans" />
        <button onClick={checkAnswer}>Check answer</button>
      </div>
      <div className="button">
        <button onClick={previousCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardDeck;

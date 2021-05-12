import React from 'react'
import Flashcard from './Flashcard';

function Flashcardlist(props) {
    return (
      <div className="card-grid">
       
        {props.flashcards.map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
      </div> 
    )
}

export default Flashcardlist; 

// <Flashcard flashcards={props.flashcard[0]} key={flashcard.id} />
import React from 'react'

export default function Flashcardlist({ flashcards }) {
    return (
        <div className="card-grid">
        {flashcards.map(flashcard => {
           return <Flashcard flashcard-{flashcard} key={}
        })}
       </div>

       
    )
}

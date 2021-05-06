import React, {useState} from 'react';
import Flashcardlist from './Flashcardlist';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
    <Flashcardlist flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is 2+2?',
        answer: '4',
        options: [
            '2',
            '3',
            '4',
            '5'
        ]
    },

{
        id: 1,
        question: 'question 2',
        answer: 'answer ',
        options: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
]




export default App;
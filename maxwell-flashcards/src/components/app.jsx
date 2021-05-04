import React from 'react';
import './styles.css'

function Card() {
    const [text, setText] = React.useState('Front Side')
    function handleClick() {
        setText('Back Side');
    }
    return (
        <div className="flash-card" onClick={handleClick}>
            {text}
        </div>
    );
}
    

export default function App() {
    return (
        <div className="App">
            <h1>devCodeCampFlashcards</h1>
            <h2>Click on a card for the answer!</h2>
            <Card />
            <Card />
            <Card />
        </div>
    );
}
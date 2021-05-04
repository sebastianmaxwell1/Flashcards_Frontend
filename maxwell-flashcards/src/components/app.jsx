import React from 'react';
import './styles.css';
import Card from './Card';

// function Card(props) {
//     const [text, setText] = React.useState(props.frontSide)
//     function handleClick() {
//         setText(props.backSide);
//     }
//     return (
//         <div className="flash-card" onClick={handleClick}>
//             {text}
//         </div>
//     );
// }
    

export default function App() {
    return (
        <div className="App">
            <h1>devCodeCampFlashcards</h1>
            <h2>Click on a card for the answer!</h2>
            <Card frontSide='Inside which HTML element do we put the JavaScript?' backSide='Script' />
            <Card />
            <Card />
        </div>
    );
}
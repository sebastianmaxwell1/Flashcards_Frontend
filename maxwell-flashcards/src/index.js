import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';


const jsxElement = <h1>Flashcards! Let's Graduate!</h1>;
console.log(jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


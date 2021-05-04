import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <App />
        <div>After the app</div>
    </React.StrictMode>,
    rootElement
)
// import 'bootstrap/dist/css/bootstrap.css';

// const jsxElement = <h1>Flashcard React App</h1>;
// console.log(jsxElement);

// ReactDOM.render(<App />, document.getElementById('root'));



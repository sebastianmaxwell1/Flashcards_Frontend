import React, { Component } from 'react';
import './styles/styles.css'
import Card from './Card';
import axios from 'axios';


class App extends Component {
    constructor() {
        super()

        this.getAllFlashcards = this.getAllFlashcards.bind(this)
    }

    state = {
        flashcards: [],
        dataReady: false
    }

    componentDidMount(){
       this.getAllFlashcards();
    }

    async getAllFlashcards(){
        let response = await axios.get('http://127.0.0.1:8000/')
        this.setState({
            flashcards: response.data,
            dataReady: true
        });
        console.log(this.state.flashcards)
    }

    async addFlashcard(flashcardId){
        await axios.post('http://127.0.0.1:8000/flashcards/+/');
        this.getAllFlashcards();
    }
    
    render() {
        if(this.state.dataReady){
            return(
                <div className="App">
                <h1>devCodeCampFlashcards</h1>
                <h2>Click on a card for the answer!</h2>
                <div>
                    {this.state.flashcards.map(function(question){
                        return  <Card frontSide={question.question} backSide={question.answer}/>
                    })}
                   
                </div>
           </div>
            )
        }
        else{
            return(<div></div>)
        }
    }
}

export default App;


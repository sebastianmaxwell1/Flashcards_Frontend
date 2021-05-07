import React from 'react';
import axios from 'axios';
import './CreateCard.css'

export default class CreateCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  handleChange = event => {
    this.setState({ question: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      question: this.state.question,
      answer: this.state.answer
    };

    axios.post(`http://127.0.0.1:8000/admin/flashcards/flashcardfront/add/`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Flashcard Question:
            <input placeholder='Type question...' type="text" name="question" onChange={this.handleChange} />
          </label>
          <label>
            Flashcard Answer:
            <input placeholder='Type answer...' type="text" name="answer" onChange={this.handleChange} />
          </label>
          <button classname= "createbutton"type="submit">Add Flashcard</button>
        </form>
      </div>
    )
  }
}
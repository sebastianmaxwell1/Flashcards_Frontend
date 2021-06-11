import React, {Component} from 'react';


class CreateCard extends Component {
    constructor(props) {
    super(props);
    this.state = {
        question: '',
        answer: '',
        collection: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });

}

handleSubmit(event) {
    event.preventDefault();

    const card = {
        question: this.state.question,
        answer: this.state.answer,
        collection: this.state.collection,
        
    }
    this.props.addNewCard(card);
    this.setState({
        question: '',
        answer: '',
        collection: '',
       
    });
}

render() {
    return (
        <div>
            <hr />
            <center className="container-fluid">
              <h5>Add a Flashcard to a study collection!</h5>
            </center>
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div className='col-sm-4'>
                    <label>Question:</label>
                    <input className="form-control" type='text' name='question' value={this.state.question}
                    onChange={this.handleChange} />
               </div>
               <div className='col-sm-4'>
                    <label>Answer:</label>
                    <input className="form-control" type='text' name='answer' value={this.state.answer}
                    onChange={this.handleChange} />
                        </div>
              <div className='col-sm-4'>
                    <label>Collection Set: Enter 1-3 </label>
                    <input className="form-control" type='text' name='collection' value={this.state.collection}
                    onChange={this.handleChange} />
                        </div>
                        <div className='col mt-3'>
                                <input className="btn-md btn-primary px-5" type='submit' value='Add to Collection' />
                            </div>
          </form>
        </div>
      )
    }
    }
    
    export default CreateCard;




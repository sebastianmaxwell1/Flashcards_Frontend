import React, {Component} from 'react';



class UpdateCard extends Component {
    constructor(props) {
    super(props);
    this.state = {
        id: "",
        word: "",
        definition: "",
        collection: "",
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
    const id ={id: this.state.id,}
    const card = {
        question: this.state.question,
        answer: this.state.answer,
        collection: this.state.album,
        
    }
    this.props.updateCard(id,card);
    this.setState({
        question: "",
        answer: "",
        collection: "",
       
    });
}

render() {
    
    return(
        <div>
        <hr />
        <center className="container-fluid">
          <h5>Update a Flashcard!</h5>
        </center>
        <form className="container-fluid" onSubmit={this.handleSubmit}>
        <div className='col-sm-4'>
                <label>Id:</label>
                <input className="form-control" type='text' name='id' value={this.state.id}
                onChange={this.handleChange} />
           </div>
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
                <label>Collection Set:</label>
                <input className="form-control" type='text' name='collection' value={this.state.collection}
                onChange={this.handleChange} />
                    </div>
                    <div className='col mt-3'>
                            <input className="btn-md btn-primary px-5" type='submit' value='Update Flashcard' />
                        </div>
      </form>
    </div>
  )
}
}
export default UpdateCard;
import Collection from './Collection/Collection';
import Flashcard from './Flashcard/Flashcard';
import FilteredCards from './FilteredCards';
import CreateCard from './CreateCard'
import React, {Component} from 'react';
import UpdateCard from './UpdateCard';
import CardTable from './FlashcardTable';
import axios from 'axios'
import TitleBar from './Titlebar/TitleBar';
import './app.css'


class App extends Component {
  state = {
      collection: [],
      card: [],
      filteredCards: [],
      answer: true,
      
  }


componentDidMount(){
  console.log("component did mount");
  this.getAllCollections();
  this.getAllCards();

}
lip(){
      this.setState({
          
          answer: false
      })    
}
flip(){
      this.setState({
          
          answer: true
      })    
}
async getAllCollections(){
  let response = await axios.get('http://127.0.0.1:8000/');
  this.setState({
      collection: response.data
  })
}
async getAllCards(){
  let response = await axios.get('http://127.0.0.1:8000/');
  this.setState({
      card: response.data
  })
}

mapCollections(){
  return this.state.collection.map(collection =>
      <Collection
        key={collection.id}
        collection={collection}
        filterCollectionById = {(collectionId) => this.filterCollectionById(collectionId)}
      />
  )
}

mapCards(){
  return this.state.card.map(flashcard =>
      <Flashcard
        key={flashcard.id}
        flashcard={flashcard}
      />
  )

}

filterCollectionById(collectionId){
  
  let card = this.state.card;
  
      let i=0;
      let filteredCards = this.state.card.filter((card) => {
          if (this.state.card[i].collection === collectionId){
              i++
              return true;    
      }
          else{
              i++
              return false;
          }
      })
          
      
      this.setState({
          filteredCards: filteredCards
      })
  }
      
  async addNewCard(card){ 
      await axios.post('http://127.0.0.1:8000/', card);
      alert('Flashcard Added to Collection!')
       this.getAllCards();
  }

  async updateCard(id ,card){
      await axios.put('http://127.0.0.1:8000/'+id+'/', card);
      alert('Flashcard upgraded in Collection!')
      
  }

render(){
  return(
    
      <div>
      <TitleBar />
      <CreateCard addNewCard={this.addNewCard.bind(this)}/>
  
      

       <CardTable 
          mapCollections={() => this.mapCollections()} 
          card={this.state.card}
      />
      <FilteredCards
          filteredCards={this.state.filteredCards}
          lip={() => this.lip()}
          flip={() => this.flip()}
          answer={this.state.answer}
          />
      
      <UpdateCard updateCard={this.updateCard.bind(this)}/> */
      </div>
  ); 
}
}
export default App;


import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList'
import './app.css'
import axios from 'axios';
import CreateCard from './CreateCard'
import Flashcard from './Flashcard'

function App() {
    const [flashcards, setFlashcards] = useState([])
    const [collections, setCollections] = useState([])

    const categoryEl = useRef()
    const amountEl = useRef()

    useEffect(async () => {
        let response = await axios.get('http://127.0.0.1:8000/')
        console.log(response.data)
        setFlashcards(response.data)
     }, [])

     useEffect(async () => {
        let response = await axios.post(`http://127.0.0.1:8000/admin/flashcards/flash`)
        console.log(response.data)
        setFlashcards(response.data)
     }, [])
 
     useEffect(() => {
   
    }, [])
  
    function decodeString(str) {
      const textArea = document.createElement('textarea')
      textArea.innerHTML= str
      return textArea.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios
        .get('http://127.0.0.1:8000/', {
          params: {
            amount: amountEl.current.value,
            category: categoryEl.current.value
          }
        })
        .then(res => {
          setFlashcards(res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map(a => decodeString(a)),
              answer
            ]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - .5)
            }
          }))
        })
      }
    
      return (
        <>
          <form className="header" onSubmit={handleSubmit}>
            <div className="form-group">
            <div>
                 <CreateCard />
            </div>
            <br></br>
              <label htmlFor="collections">Collections</label>
              <select id="collections" ref={collections}>
                {collections.map(collections => {
                  return <option value={collections.id} key={collections.id}>{collections.name}</option>
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="amount">Number of Questions</label>
              <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
            </div>
            <div className="form-group">
              <button className="btn">Generate</button>
            </div>
          </form>
          <div className="container">
            <FlashcardList flashcards={flashcards} />
          </div>

        </>
    );

}


            

export default App;
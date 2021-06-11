// import './filter.css'
import React from 'react';

const FilteredCards= (props) => {
    let i = 0
    let j=0
    let id = 0
        return(
            
        props.filteredCards.map((cards) => {
            j = props.filteredCards.length
            i++
            id = cards.id
            if( props.answer === true){
                
                return(
                    
                    <div>
                        
                        <element className = 'word'> {cards.question}  </element>
                        <element className = 'num'> {'Card'+i+'of' +j}</element>
                        <element className = 'id'> {'ID'+id}</element>
                        <button className='lip' onClick = {() => props.lip()}>Answer</button>
                        
                        
                    </div>
            )}
            else {
                return(
                
                    <div>
                        <element className = 'word'> {cards.answer} </element>
                        <element className = 'num'> {'Card'+i+'of' +j}</element>
                        <element className = 'id'> {'ID'+id}</element>
                        <button className='flip' onClick = {() => props.flip()}>Question</button>
                        
                    </div>
                )}
            }
        ))}
        
export default FilteredCards;

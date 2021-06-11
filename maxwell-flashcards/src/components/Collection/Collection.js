import React from 'react';
import SelectCollection from '../Button/Button';
import './Collection.css'


const Collection = (props) =>{
    
    return (
        <div>
            <h2>{props.collection.title}</h2>
            {/* <h1>Collection</h1> */}

            <SelectCollection 
                collection={props.collection.id} 
                cards={props.card} 
                filterCollectionById={props.filterCollectionById}/>
            

      </div>     
    );
    
}

export default Collection;
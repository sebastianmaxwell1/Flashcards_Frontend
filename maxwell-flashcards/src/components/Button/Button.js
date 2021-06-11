import React from 'react';



function SelectCollection(props){
    return(
        <div className="row row-spacer">
            <div className="col-md-12">
                <button onClick={() => props.filterCollectionById(props.collection)}>Study this Collection</button>
            </div>
        </div>
    )
}


export default SelectCollection;
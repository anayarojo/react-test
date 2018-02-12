import React from 'react'
import "../../../css/widgets/components/search.css"

const Search = (props) => (
    <form 
        className="search" 
        onSubmit={props.handleSubmit}
    >
        <input 
            type="text"
            name="search"
            className="search-input"
            placeholder="Busca tu video favorito"
            onChange={props.handleChange}
            ref={props.setRef}
            value={props.value}
        />
    </form>    
)

export default Search
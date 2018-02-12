import React from "react"
import Playlist from "../../playlist/components/playlist"
import "../../../css/categories/components/category.css"

function Category(props){
    return(
        <div className="category">
            <p className="category-description">{props.description}</p>
            <h2 className="category-title">{props.title}</h2>
            <Playlist 
                playlist={props.playlist} 
                handleOpenModalClick={props.handleOpenModalClick}
            />
        </div>
    )
}

export default Category
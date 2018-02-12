import React from "react"
import Category from "./category"
import "../../../css/categories/components/categories.css"
import Search from "../../widgets/containers/search"

function Categories(props) {
    return (
        <div className="categories">
            <Search />
            {
                props.categories.map((item) => {
                    return (
                        <Category 
                            key={item.id} 
                            {...item} 
                            handleOpenModalClick={props.handleOpenModalClick}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories
import React from "react"
import logo from "../../../img/logo.png"
import "../../../css/pages/components/related.css"

function Related(props){
    return(
        <div className="related">
            <img src={logo} width={250} alt="Platzi Video"/>
        </div>
    )
}

export default Related
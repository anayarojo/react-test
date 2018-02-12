import React from "react"
import "../../../css/widgets/components/modal.css"

function Modal(props){
    return(
        <div className="modal">
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal
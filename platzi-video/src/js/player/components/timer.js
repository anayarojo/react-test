import React from 'react'
import "../../../css/player/components/timer.css"

const Timer = (props) => {
    return (
        <div className="timer">
            <p>
                <span>{props.currentTime} / {props.duration}</span>
            </p>
        </div>
    )
}

export default Timer
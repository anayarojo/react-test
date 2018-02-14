import React from 'react'
import "../../../css/player/components/progress-bar.css"

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <input 
                type="range" 
                min={0}
                max={props.duration}
                value={props.currentTime}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default ProgressBar
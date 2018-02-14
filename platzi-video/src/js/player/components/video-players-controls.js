import React from 'react'
import "../../../css/player/components/video-players-controls.css"

const VideoPlayerControls = (props) => {
    return (
        <div className="video-player-controls">
            {props.children}
        </div>
    )
}

export default VideoPlayerControls
import React from 'react'
import "../../../css/player/components/video-player-layout.css"

const VideoPlayerLayout = (props) => {
    return(
        <div className="video-player-layout">
            {props.children}
        </div>
    )
}

export default VideoPlayerLayout
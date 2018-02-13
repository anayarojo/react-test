import React, { Component } from 'react'
import "../../../css/player/components/video.css"

class Video extends Component {
    togglePlay() {
        if (this.props.pause) {
            this.video.play()
        }
        else {
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pause != this.props.pause) {
            this.togglePlay();
        }
    }
    setRef = element => {
        this.video = element;
    }
    render() {
        return (
            <video className="video"
                autoPlay={this.props.autoPlay}
                src={this.props.src}
                ref={this.setRef}
            />
        )
    }
}

export default Video

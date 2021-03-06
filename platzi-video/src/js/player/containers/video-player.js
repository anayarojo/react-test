import React, { Component } from 'react'
import VideoPlayerLayout from "../components/video-player-layout"
import Video from "../components/video"
import Title from "../components/title"
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-players-controls'
import ProgressBar from "../components/progress-bar"
import { formatedTime } from "../utilities/timer-utility"

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
    }
    TogglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoPlay),
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration,
        })
    }
    handleTimeUpdate = event => {
        this.video = event.target
        this.setState({
            currentTime: this.video.currentTime,
        })
    }
    handleProgressChange = event => {
        this.progress = event.target
        this.video.currentTime = this.progress.value
    }
    render() {
        return (
            <VideoPlayerLayout>
                <VideoPlayerControls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.TogglePlay}
                    />
                    <Timer
                        duration={formatedTime(this.state.duration)}
                        currentTime={formatedTime(this.state.currentTime)}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                        handleChange={this.handleProgressChange}
                    />
                </VideoPlayerControls>
                <Title
                    title="Titulo del video"
                />
                <Video
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer

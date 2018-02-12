import React from "react";
import Media from "./media.js";
import "../../../css/playlist/components/playlist.css";
import Play from "../../icons/components/play.js"
import Pause from "../../icons/components/pause.js";
import Volume from "../../icons/components/volume.js";
import FullScreen from "../../icons/components/full-screen.js";

function Playlist(props) {
    return (
        <div className="playlist">
            {
                props.playlist.map((item) => {
                    return (
                        <Media 
                            {...item} 
                            key={item.id} 
                            handleClick={props.handleOpenModalClick}
                         />
                    )
                })
            }
        </div>
    )
}

export default Playlist;
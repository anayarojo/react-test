import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "../../../css/playlist/components/media.css";

class Media extends PureComponent {

    handleClick = (event) => {
        console.log(this.props.title)
    }
    
    render() {
        return (
            <div className="media" onClick={this.handleClick}>
                <div className="media-cover">
                    <img className="media-image"
                        src={this.props.cover}
                        alt={this.props.title}
                        width={260}
                        height={160}
                    />
                    <h3 className="media-title">{this.props.title}</h3>
                    <p className="media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
}

export default Media;
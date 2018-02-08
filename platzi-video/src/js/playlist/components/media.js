import { Component } from "react";
import "../../../css/playlist/components/Media.css";
class Media extends Component{
    render(){
        return (
            <div className="Media">
                <div>
                    <img 
                        src=""
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3>¿Por qué aprender React?</h3>
                    <p>Raul Anaya Rojo</p>
                </div>
            </div>
        )
    }
}

export default Media;
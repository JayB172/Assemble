import React from  "react";
import "./Assembling.css";
import { Stage, Layer, Rect, Circle } from 'react-konva';

const Assembling = () => {
    return (
        <div>
            <h1>Design your wall!</h1>
            <div className="container canvas">
                <div className="row canva">
                    <div className="col-3 elements">
                        <p>Assembl</p>
                    </div>
                    <div className="col-9">
                        <p>Assemble</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assembling ;
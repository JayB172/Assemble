import React from "react";
import "./Parts.css";
import { withRouter } from 'react-router-dom';

const Parts =  () => {
    return(
        <div className = "wallComponents">
            <h1 className = "partsHeading">Wall Components</h1>
            <div className= "container img-container">
            <div className= "row">
                <div className="col-sm">
                <img className="image"
             src="https://images.unsplash.com/photo-1527352774566-e4916e36c645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              />
              <h2>Window</h2>
                </div>
                <div className="col-sm">
                <img className="image"
             src="https://images.unsplash.com/photo-1545009784-1cd5854f1570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              />
              <h2>Door</h2>
                </div>
                <div className="col-sm">
                <img className="image"
             src="https://images.unsplash.com/photo-1596394183255-728c265e24aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              />
              <h2>Ventilator</h2>
                </div>
            </div>
            <div className= "row">
                <div className="col-sm">
                <img className="image"
             src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              />
              <h2>Painting/Frames</h2>
                </div>
                <div className="col-sm">
                <img className="image"
             src="https://images.unsplash.com/photo-1570517974157-8250f086f202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" 
             />
              <h2>Clock</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
            <button className="btn button btn-primary btn-lg"><a className= "link" href="/Assembling">Next</a></button> 
                </div>
            </div>
            </div>           
        </div>
    )
}

export default withRouter(Parts); 
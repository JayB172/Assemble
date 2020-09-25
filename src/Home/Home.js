import React from "react";
import "./Home.css";
import { withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div className="wall">
         <h1 className="homeHeading">Customize Your Wall</h1>
         <img className="wallImage" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
         <button className="btn button btn-primary btn-lg"><a className= "link" href="/Parts">Start Customizing</a></button>
        </div>
    )
}

export default withRouter(Home);
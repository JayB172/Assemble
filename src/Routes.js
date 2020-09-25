import React from "react";
import {Router , Switch, Route} from "react-router-dom";

import Home from "./Home/Home"
import Parts from "./Parts/Parts"
import Assembling from "./Assembling/Assembling"
import Colouring from "./Colouring/Colouring";
import  FinalProduct from "./FinalProduct/FinalProduct"
import history from './history';

const Routes = () => {
    return (
        <Router  history={history}>
            <Switch>
                <Route path= "/" exact component={Home} />
                <Route path= "/Parts" component={Parts} />
                <Route path= "/Assembling" component={Assembling} />
                <Route path= "/Colouring" component={Colouring} />
                <Route path= "/FinalProduct" component={FinalProduct} />
            </Switch>
        </Router>
    )
}

export default Routes;
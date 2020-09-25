import React from  "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Assembling App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Parts">Parts<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Assembling">Assembling</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Colouring">Colouring</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/FinalProduct">Final Product</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default withRouter(Navigation);
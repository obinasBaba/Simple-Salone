import './App.css';
import CSSGrid from "./mock";
import {Box} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Hero from "./hero";
import About from "./about";
import Service from "./service";

function App() {
    return (
        <React.Fragment>
            <Hero  />
            <About/>
            <Service />
        </React.Fragment>
    );
}

export default App;

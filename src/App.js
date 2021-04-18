import './App.css';
import React from "react";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import ParallaxCarousel from "./gallery";


function App() {
    return (
        <React.Fragment>
            <Hero  />
            <About/>
            <Service />
            <ParallaxCarousel />
        </React.Fragment>
    );
}

export default App;

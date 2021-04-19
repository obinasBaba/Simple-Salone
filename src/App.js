import './App.css';
import React from "react";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import ParallaxCarousel from "./gallery";
import PriceList from "./priceList";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Float from "./priceList/floatDemo";
import Footer from "./footer";


function App() {
    const theme = createMuiTheme();

    return (
        <React.Fragment>
            <ThemeProvider theme={theme} >
                <Hero  />
                <About/>
                <Service />
                <ParallaxCarousel />
                <PriceList />
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;

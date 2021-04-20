import './App.css';
import React from "react";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import ParallaxCarousel from "./gallery";
import PriceList from "./priceList";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Footer from "./footer";
import {orange} from "@material-ui/core/colors";
import {responsiveFontSizes} from "@material-ui/core";


function App() {
    let theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#FFEBE3',
                dark: '#d0381b'
            },
            text: {

            }
        },
        typography: {
            fontFamily: 'Poppins, sans-serif',
            h1: {
                fontSize: '2em',
                fontWeight: 'bold',
            },
            h5: {
                fontWeight: 'bolder',
                // letterSpacing: '1px',
                wordSpacing: '2px',
                fontFamily: 'Special Elite, cursive',
                // fontSize: '2rem'
            }
        },

    });

    theme = responsiveFontSizes(theme);

    return (
        <React.Fragment>
            <ThemeProvider theme={ theme }>
                <Hero/>
                <About/>
                <Service/>
                <ParallaxCarousel/>
                <PriceList/>
                <Footer/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;

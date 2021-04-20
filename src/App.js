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
    const secondaryMainColor = '#FFEBE3';
    let theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: secondaryMainColor,
                dark: '#d0381b'
            },
            text: {
                secondary: 'rgba(0, 0, 0, 0.7)'
            }
        },
        typography: {
            fontFamily: 'Space Mono, monospace',

            h1: {
                fontSize: '2em',
                fontWeight: 'bold',
            },
            h4: {
                fontWeight: 'bolder',
                wordSpacing: '2px',
                fontFamily: 'Special Elite, cursive',
                textTransform: 'capitalize',
                lineHeight: '1',
                fontSize: '2rem',
            },

            h6: {
                fontWeight: 'bolder',
                letterSpacing: '3px',
                wordSpacing: '2px',
                fontFamily: 'Special Elite, cursive',
                textTransform: 'uppercase',
            },

            body1:{
                fontSize: '1.2rem',
                textTransform: 'capitalize'
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    borderRadius: '0',
                    padding: '16px',
                },

                contained: {
                    backgroundColor: secondaryMainColor,
                },
                label: {
                    letterSpacing: '2.1px',
                    fontWeight: 'bold',
                    fontVariant: 'h5',
                }
            },

            MuiOutlinedInput: {
                root: {
                    backgroundColor: secondaryMainColor,
                    borderRadius: '0',
                    padding: '8px'
                },
            }
        },
        props: {
            MuiButton: {
                variant: "contained",
            }
        }
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

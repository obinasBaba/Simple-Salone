import './App.css';
import React from "react";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import PriceList from "./priceList";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Footer from "./footer";
import {responsiveFontSizes} from "@material-ui/core";
import styled from "styled-components";
import Gallery from "./gallery";

const PageContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  overflow: hidden;
`

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
                <PageContainer>
                <Hero/>
                <About/>
                <Service/>
                <Gallery/>
                <PriceList/>
                <Footer/>
                </PageContainer>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;

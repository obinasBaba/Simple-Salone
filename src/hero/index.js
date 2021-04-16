import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import BackToTop from "./Appbar";


const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh',
        position: 'relative',
        backgroundImage: 'url(tools.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    'hero-overlay': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0,0,0, .1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& img': {
            width: '23%',
        }
    }
}))

const Hero = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <BackToTop  />
            <div className={classes["hero-overlay"]}>
                <img src="reile_circle_small.png" alt=""/>
            </div>
        </div>
    );
};

export default Hero;

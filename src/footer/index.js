import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import FooterContent from "./footerContent";
import Cta from "./cta";

const useStyle = makeStyles( theme => ({
    root: {
        minHeight: '100vh'
    },
    footerContainer: {
        flex: 1,
        background: 'black',
        color: 'white'
    }
}))

const Footer = () => {
    const classes = useStyle();

    return (
        <Grid container direction='column' className={classes.root}>
            <Grid item container >
                <Cta />
            </Grid>

            <Grid item container className={classes.footerContainer}>
                <FooterContent/>
            </Grid>
        </Grid>
    );
};

export default Footer;

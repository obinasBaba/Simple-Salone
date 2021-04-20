import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Typography} from "@material-ui/core";

const useStyle = makeStyles( theme => ({
    root: {
        // flexGrow: 1,
        backgroundImage: 'url(tools.jpg)',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        padding:theme.spacing(8),
        color: "white",
        gap: '1rem',
    }
}))

const Cta = () => {
    const classes = useStyle();

    return (
        <Grid item container className={classes.root} direction='column' alignItems='center' >
            <Typography align='center'   variant='h3' >Good hair days are</Typography>

            <Typography align='center' gutterBottom variant='h3'>just an appointment away!</Typography>

            <Button >BOOK CONSultation</Button>
        </Grid>
    );
};

export default Cta;

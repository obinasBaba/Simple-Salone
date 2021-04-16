import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
// import tools from '../public/tools.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        // height: '100vh',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    negMargin: {
        marginRight: '-10rem',
        padding: '2rem'
    }
}));

export default function CSSGrid() {
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <img src='tools.jpg' alt=""/>



        </div>


    );
}

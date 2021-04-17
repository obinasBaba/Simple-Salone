import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// import rss from './rss.png'

const useClass = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        '&:before': {
            content: 'before',
            display: 'block',
            background: 'black',
            width: '200px',
            height: '200px'
        }
    },
    col: {

        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },

        '& img': {
            maxWidth: '100%',
            width: '60%',
        }
    },
    container: {
        border: 'thin solid crimson',
        position: 'relative',
        '&::after': {
            content: 'sdlkjf',
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'blue',
            display: 'block',
            with: '200',
            height: '200',
        }
    },
    aboutText: {
        '&::before': {
            // content: new String('asdf'),
            // position: 'absolute',
            // top: 0,
            // left: 0,
            background: 'blue',
            display: 'block',
            // with: '200',
            // height: '200',
        }
    }
}))

const About = () => {
    const classes = useClass();

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid xs={0} sm={1} style={{ border: 'thin solid crimson' }} />

            <Grid xs item container className={classes.container}>

                <Grid item xs={12} sm={6} className={classes.col} container  >
                    <img src='rrs.png' alt="rss"/>
                </Grid>

                <Grid item container xs={12} sm={6} alignItems='center' spacing={3} >
                    <Typography variant='h5' className={classes.aboutText}>
                        At MY Beauty Salon, we use the high quality products and the
                        latest techniques for treating hair. We don't cut corners, we cut hair
                        Book an appointment to find out for yourself.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={0} sm={1}  style={{ border: 'thin solid crimson' }}/>
        </Grid>
    );
};

export default About;

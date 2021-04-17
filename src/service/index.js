import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
    },
    containerWrapper: {
        alignItems: 'center',

        '& > :last-child': {
            marginBottom: 'initial',
        },

        [theme.breakpoints.up('sm')]: {
            '& > :nth-child(2n)': {
                flexDirection: 'row-reverse',
                '& > :first-child': {
                    border: 'thick solid blue',
                    marginRight: 'initial',
                    marginLeft: '-6%',
                }
            },


        },


    },
    container: {
        [theme.breakpoints.up('sm')]: {
            marginBottom: '-8%',
            '& > :first-child': {
                marginRight: '-6%',
            },
        },


    },
    imgWrapper: {

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    }
}))

const Service = () => {

    const classes = useStyle();

    return (
        <Grid xs container className={classes.root}>
            <Grid item xs={0} sm={0} md={2} style={{border: 'thin solid crimson'}}/>

            <Grid xs sm={12} md={8} item container
                  direction='column' className={classes.containerWrapper}>

                <Grid item container xs className={classes.container}>

                    <Grid item xs={12} sm={7} className={classes.imgWrapper}>
                        <img src="img-one.png" alt=""/>
                    </Grid>

                    <Grid item xs={12} sm={5} container justify='center' direction='column'>


                        <Typography variant='h4' gutterBottom>
                            Your hair is 90% of your selfie
                        </Typography>

                        <Typography variant='body1'>
                            hair-spirations? not problem, we will do our best to re-create that look you've
                            lusted after. After all, it's our job to make your look and fell your best
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs className={classes.container}>
                    <Grid item xs={12} sm={7} className={classes.imgWrapper}>
                        <img src="img-two.png" alt=""/>
                    </Grid>

                    <Grid item xs={12} sm={5} container justify='center' direction='column'>

                        <Typography variant='h4' gutterBottom>
                            Paint it pretty
                        </Typography>

                        <Typography variant='body1'>
                            Find the latest colors and trend picks for your nails with our
                            highly experienced nail technician
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs className={classes.container}>

                    <Grid item xs={12} sm={7} className={classes.imgWrapper}>
                        <img src="img-three.png" alt=""/>
                    </Grid>

                    <Grid item xs={12} sm={5} container justify='center' direction='column'>


                        <Typography variant='h4' gutterBottom>
                            Hello, Gorgeous!
                        </Typography>
                        <Typography variant='body1'>
                            Contours, colors correcting, blending...
                            where to event start? Let us do the guessing
                            work and doll you up for your next event!
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>

            <Grid item xs={0} sm={0} md={2} style={{border: 'thin solid crimson'}}/>
        </Grid>
    );
};

export default Service;

import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
    root: {
        background: '#FFEBE3',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            paddingTop: theme.spacing(17),
            paddingBottom: theme.spacing(17),
        },

    },

    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',

        // columnGap: theme.spacing(2),
        rowGap: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            gridTemplateRows: '.8fr .2fr .6fr .2fr  .8fr',
        },

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            gridColumn: '1 / 13',

            [theme.breakpoints.up('sm')]: {
                gridColumn: '1 / 9',
            },
        },

        '& > div': {
            alignSelf: 'center',
            gridColumn: '1 / 13',
            [theme.breakpoints.up('sm')]: {
                gridColumn: '8 / 13',
            },
        },

    },
    [theme.breakpoints.up('sm')]: {
        imgOne: {
            gridRow: '1/ 3',
        },

        descOne: {
            gridRow: '1 / 3'
        },

        imgTwo: {
            gridRow: '2 / 5',
            gridColumn: '5 / 13 !important'
        },

        descTwo: {
            gridRow: '2 / 5',
            gridColumn: '1 / 6 !important'
        },

        imgThree: {
            gridRow: '4 / 6'
        },

        descThree: {
            gridRow: '4 / 6'
        }
    },

}))

const Service = () => {

    const classes = useStyle();

    return (
        <Grid xs container className={classes.root}>
            <Grid item xs={0} sm={0} md={1} lg={2}  />

            <Grid item xs sm={12} md={10} lg={8} className={classes.container}>

                    <img className={classes.imgOne} src="img-one.png" alt=""   />

                    <div className={classes.descOne} >
                        <Typography variant='h4' gutterBottom>
                            Your hair is 90% of your selfie
                        </Typography>

                        <Typography variant='body1'>
                            hair-spirations? not problem, we will do our best to re-create that look you've
                            lusted after. After all, it's our job to make your look and fell your best
                        </Typography>
                    </div   >

                    <img className={classes.imgTwo} src="img-two.png" alt=""/>

                    <div className={classes.descTwo} >
                        <Typography variant='h4' gutterBottom>
                            Paint it pretty
                        </Typography>

                        <Typography variant='body1'>
                            Find the latest colors and trend picks for your nails with our
                            highly experienced nail technician
                        </Typography>
                    </div>

                    <img className={classes.imgThree} src="img-three.png" alt=""/>

                    <div className={classes.descThree} >
                        <Typography variant='h4' gutterBottom>
                            Hello, Gorgeous!
                        </Typography>
                        <Typography variant='body1'>
                            Contours, colors correcting, blending...
                            where to event start? Let us do the guessing
                            work and doll you up for your next event!
                        </Typography>
                    </div>

            </Grid>

            <Grid item xs={0} sm={0} md={1} lg={2}  />
        </Grid>
    );
};

export default Service;

import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles( theme => ({
    root: {
        position: 'relative',
        padding: theme.spacing( 3 ),
        background: '#FFEBE3',
        display: 'flex',
        overflow: 'hidden',

        [theme.breakpoints.up( 'md' )]: {
            padding: theme.spacing( 3 ),
            paddingTop: theme.spacing( 17 ),
            paddingBottom: theme.spacing( 17 ),
        },

        ' &::after ': {
            content: '"service"',
            position: 'absolute',
            fontSize: 'calc(2rem + 6vw)',
            top: '-3%',
            fontFamily: 'Monoton, cursive',
            right: `0`,
            fontWeight: '800',
            opacity: '.07',
        },

    },

    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        rowGap: theme.spacing( 4 ),

        [theme.breakpoints.up( 'sm' )]: {
            gridTemplateRows: '.8fr .2fr .6fr .2fr  .8fr',
        },

        '& :nth-of-type(2n)': {

        },

        '& img': {
            width: '100%',
            height: '100%',
            maxHeight: '500px',
            objectFit: 'cover',
            gridColumn: '1 / 13',

            [theme.breakpoints.up( 'sm' )]: {
                gridColumn: '1 / 9',
            },
        },

        '& > div': {
            alignSelf: 'center',
            gridColumn: '1 / 13',
            [theme.breakpoints.up( 'sm' )]: {
                gridColumn: '8 / 13',
            },
        },

    },
    [theme.breakpoints.up( 'sm' )]: {
        imgOne: {
            gridRow: '1/ 3',
        },

        descOne: {
            gridRow: '1 / 3',
            position: 'relative',

            '&::after': {
                content: '"01"',
                position: 'absolute',
                fontSize: "15rem",
                top: '0%',
                fontWeight: '800',
                lineHeight: '0',
                right: '-20%',
                opacity: '.1',
            },
        },

        imgTwo: {
            gridRow: '2 / 5',
            gridColumn: '5 / 13 !important'
        },

        descTwo: {
            gridRow: '2 / 5',
            gridColumn: '1 / 6 !important',

            position: 'relative',

            '&::after': {
                content: '"02"',
                position: 'absolute',
                fontSize: "15rem",
                top: '-10%',
                fontWeight: '800',
                lineHeight: '0',
                left: '-40%',
                opacity: '.1',
            },
        },

        imgThree: {
            gridRow: '4 / 6'
        },

        descThree: {
            gridRow: '4 / 6',
            position: 'relative',

            '&::after': {
                content: '"03"',
                position: 'absolute',
                fontSize: "15rem",
                top: '40%',
                fontWeight: '800',
                lineHeight: '0',
                right: '-30%',
                opacity: '.1',
            },
        }
    },

}) )

const Service = () => {

    const classes = useStyle();

    return (
        <Grid xs container className={ classes.root }>

            <Grid item xs={ 0 } sm={ 0 } md={ 1 } lg={ 2 }/>

            <Grid item xs sm={ 12 } md={ 10 } lg={ 8 } className={ classes.container }>

                <img className={ classes.imgOne } src="element5-digital-WCPg9ROZbM0-unsplash.jpg" alt=""/>

                <div className={ classes.descOne }>
                    <Typography variant='h4' gutterBottom>
                        Your hair is 90% of your selfie
                    </Typography>

                    <Typography variant='body1' color='textSecondary'>
                        hair-spirations? not problem, we will do our best to re-create that look you've
                        lusted after. After all, it's our job to make your look and fell your best
                    </Typography>
                </div>

                <img className={ classes.imgTwo } src="pexels-maria-gloss-4197806.jpg" alt=""/>

                <div className={ classes.descTwo }>
                    <Typography variant='h4' gutterBottom>
                        Paint it pretty
                    </Typography>

                    <Typography variant='body1'>
                        Find the latest colors and trend picks for your nails with our
                        highly experienced nail technician
                    </Typography>
                </div>

                <img className={ classes.imgThree } src="pexels-cottonbro-3997379.jpg" alt=""/>

                <div className={ classes.descThree }>
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

            <Grid item xs={ 0 } sm={ 0 } md={ 1 } lg={ 2 }/>
        </Grid>
    );
};

export default Service;

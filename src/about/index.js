import React from 'react';
import {Grid, Typography, withStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const ImgWrapperGrid = withStyles( theme => ({
    root: {
        justifyContent: 'initial',

        [theme.breakpoints.down( 'xs' )]: {
            justifyContent: 'center',
        },

        '& img': {
            maxWidth: '100%',
            width: '70%',
        }
    },
}) )( Grid )

const ChildGrid = withStyles( theme => ({
    root: {
        position: 'relative',
        gap: '2rem',
        [theme.breakpoints.up( 'sm' )]: {
            gap: '0',
        },
    },
}) )( Grid )


const ContainerGrid = withStyles( theme => ({
    root: {
        padding: theme.spacing( 3 ),
        position: 'relative',
        overflow: 'hidden',

        '&::after': {
            position: 'absolute',
            content: '"ABOUT"',
            fontSize: 'calc(6rem + 6vw)',
            fontFamily: 'Monoton, cursive',
            left: '-5%',
            fontWeight: '800',
            opacity: '.07',
            right: `calc( 0px + ${theme.spacing(10)}px )`,
            bottom: '10%',

            [theme.breakpoints.up( 'sm' )]: {
                opacity: '.1',
                bottom: 'initial',
                left: 'initial',
                top: '7%',
            },
        }
    },
}) )( Grid )

const useClass = makeStyles( theme => ({
    overlay: {
        '&::before': {
            content: '""',
            zIndex: '-999',
            position: 'absolute',
            top: '21%',
            bottom: '35%',
            left: 0,
            right: 0,
            display: 'block',
            background: theme.palette.secondary.main,

            [theme.breakpoints.up( 'sm' )]: {
                bottom: '21%',
            },
        }
    }
}) )

const About = () => {
    const classes = useClass();

    return (
        <ContainerGrid container justify='center' >
            <Grid xs={ 0 } sm={ 0 } lg={1} />


            <ChildGrid xs sm lg item container>

                <div className={ classes.overlay }/>

                <ImgWrapperGrid item container xs={ 12 } sm={ 6 }>
                    <img src='rrs.png' alt="rss"/>
                </ImgWrapperGrid>

                <Grid item container xs={ 12 } sm={ 6 } alignItems='center'>
                    <Grid item container xs={ 12 } lg={ 10 }>
                        <Typography variant='h5' component='p' color='textSecondary'>
                            At MY Beauty Salon, we use the high quality products and the
                            latest techniques for treating hair. We don't cut corners, we cut hair
                            Book an appointment to find out for yourself.
                        </Typography>
                    </Grid>
                </Grid>
            </ChildGrid>

            <Grid item xs={ 0 } sm={ 0 } lg={1}/>
        </ContainerGrid>
    );
};

export default About;

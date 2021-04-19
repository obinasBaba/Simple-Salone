import React from 'react';
import cx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import {useArrowDarkButtonStyles} from '@mui-treasury/styles/button/arrowDark';
import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import data from  './data'

const StyledGrid = styled( Grid )`
 
  ${ props => `
     padding: props.props.theme.spacing(2),     
  ` }
`

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
        // a must if you want to set arrows, indicator as absolute
        position: 'relative',
        margin: '0 auto',
        width: '100%',
    },
    container: {
        padding: spacing(2),
        paddingTop: spacing(5),
        paddingBottom: spacing(5),

        [breakpoints.up('sm')]: {
            // paddingTop: spacing(10),
        },
        [breakpoints.up('md')]: {
            padding: spacing(0),
            paddingTop: spacing(15),
            paddingBottom: spacing(15),
        },
    },
    slide: {
        // perspective: 1000, // create perspective
        overflow: 'hidden',
        // relative is a must if you want to create overlapping layers in children
        position: 'relative',
        // paddingTop: spacing(3),
    },
    imageContainer: {
        display: 'block',
        position: 'relative',
        zIndex: -2,
        paddingBottom: '55.25%',
        [breakpoints.up('md')]: {
            paddingBottom: '53.25%',
        },

    },
    image: {
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    arrow: {
        display: 'none',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [breakpoints.up('sm')]: {
            display: 'inline-flex',
        },
    },
    arrowLeft: {
        left: 0,
        [breakpoints.up('lg')]: {
            left: -164,
        },
    },
    arrowRight: {
        right: 0,
        [breakpoints.up('lg')]: {
            right: -164,
        },
    },
    text: {
        // shared style for text-top and text-bottom
        maxWidth: '400px',
        position: 'absolute',
        padding: '8px',
        transform: 'rotateY(45deg)',
        lineHeight: 1.2,
        [breakpoints.up('sm')]: {
            padding: '16px',
            maxWidth: '700px',
        },
        [breakpoints.up('md')]: {
            padding: '24px 27px',
        },
    },
    subtitle: {
        top: 40,
        left: '-5%',
        height: '42%',
        fontSize: 12,
        color: 'black',
        letterSpacing: '2px',
        zIndex: 2,
        background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #FFEBE3 110%)',
        [breakpoints.up('sm')]: {
            top: 112,
            left: '-2%',
            fontSize: '1.1rem',
            height: '32%',
        },
        [breakpoints.up('md')]: {
            top: 68,
            // fontSize: '1rem',
        },

    },
    indicatorContainer: {
        textAlign: 'center',
        margin: spacing(2),
        marginBottom: spacing(0),
    },
}));

const ParallaxCarousel = () => {
    const classes = useStyles();
    const arrowStyles = useArrowDarkButtonStyles();
    const createStyle = (slideIndex, fineIndex) => {
        const diff = slideIndex - fineIndex;
        if (Math.abs(diff) > 1) return {};
        return {
            transform: `rotateY(${(-diff + 1) * 45}deg)`,
        };
    };
    // eslint-disable-next-line react/prop-types
    const renderElements = ({ index, onChangeIndex }) => (
        <>
            <Button
                className={cx(classes.arrow, classes.arrowLeft)}
                classes={arrowStyles}
                disabled={index === 0}
                onClick={() => onChangeIndex(index - 1)}>
                <KeyboardArrowLeft />
            </Button>

            <Button
                className={cx(classes.arrow, classes.arrowRight)}
                classes={arrowStyles}
                disabled={index === data.length - 1}
                onClick={() => onChangeIndex(index + 1)}>
                <KeyboardArrowRight />
            </Button>

            <div className={classes.indicatorContainer}>
                {data.map(({ id }, i) => (
                    <DotIndicator
                        key={id}
                        active={i === index}
                        onClick={() => onChangeIndex(i)}
                    />
                ))}
            </div>
        </>
    );
    const renderChildren = ({ injectStyle, fineIndex }) =>
        data.map(({ id, title, subtitle, image }, i) => (
            <div key={id} className={classes.slide}>

                <Typography
                    variant='body1'
                    component='h2'
                    className={cx(classes.text, classes.subtitle)}
                    style={{ ...injectStyle(i, 140),
                        ...createStyle(i, fineIndex) }}
                >
                    {subtitle}
                </Typography>

                <div className={classes.imageContainer}>
                    <img className={classes.image} src={image} alt={'slide'} />
                </div>
            </div>
        ));

    return (

        <Grid container className={classes.container} >
            <Grid xs={0} sm={0} md={1} lg={2} spacing={3}
                  item  />

            <Grid xs={12} sm={12} md={10} lg={8} item container>
                <div className={classes.root}>
                    <ParallaxSlide renderElements={renderElements}>
                        {renderChildren}
                    </ParallaxSlide>
                </div>
            </Grid>

            <Grid xs={0} sm={0} md={1} lg={2} item />
        </Grid>
    );
};

export default ParallaxCarousel;
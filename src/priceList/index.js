import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import data from "./data";
import StyledList from "./StyledList";


const useStyle = makeStyles( ({spacing, breakpoints}) => ({
    root: {
        position: 'relative',
        background: '#FFEBE3',
        padding: spacing( 3 ),
        paddingTop: spacing( 5 ),
        paddingBottom: spacing( 5 ),

        [breakpoints.up( 'md' )]: {
            padding: spacing( 0 ),
            paddingTop: spacing( 15 ),
            paddingBottom: spacing( 15 ),
            maxHeight: '100vh',
        },

        '&::after': {
            position: 'absolute',
            content: '"pricelist"',
            transformOrigin: 'center',
            left: '10%',
            fontFamily: 'Monoton, cursive',
            bottom: '40%',
            fontWeight: '800',
            fontSize: 'calc(4rem + 10vw)',
            opacity: '.07'
        }
    },
    listContainer: {},
    colContainer: {
        [breakpoints.up( 'sm' )]: {
            gap: '3rem'
        },

        [breakpoints.up( 'md' )]: {
            gap: '0rem'
        },
    }
}) )

const PriceList = () => {

    const classes = useStyle();

    return (
        <Grid container className={ classes.root }>
            <Grid item xs={ 0 } md={ 0 } lg={ 2 }/>

            <Grid xs md={ 10 } lg container item className={classes.colContainer} >

                <Grid item container xs={10} sm={5} md={6}  direction='column'>

                    {
                        data.reduce( (prevItem, curItem, index, array) => {
                            if (index < (data.length / 2))
                                prevItem.push( curItem )
                            return prevItem;
                        }, [] )
                            .map( item => <StyledList list={ item.list }
                                                      title={ item.title }/> )
                    }
                </Grid>

                <Grid item container xs={10} sm={5} md={6}  direction='column'>
                    {
                        data.reduce( (prevItem, curItem, index, array) => {
                            if (index >= (data.length / 2))
                                prevItem.push( curItem )
                            return prevItem;
                        }, [] )
                            .map( item => <StyledList list={ item.list }
                                                      title={ item.title }/> )
                    }
                </Grid>

            </Grid>

            <Grid item xs={ 0 } md={ 0 } lg={ 2 }/>
        </Grid>
    );
};

export default PriceList;

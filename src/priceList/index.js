import React from 'react';
import styled from 'styled-components';
import {Grid, Typography} from "@material-ui/core";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import data from "./data";
import StyledList from "./StyledList";


const ListContainer = styled( Grid )`
  display: grid;
  grid-template-columns: 1fr;
  padding: .5em;
  grid-auto-rows: 1fr;
  grid-column-gap: 3rem;


  ${ props => `
        ${ props.theme.breakpoints.up( 'sm' ) }{
            grid-template-columns: 1fr 1fr;
        };
        ${ props.theme.breakpoints.up( 'md' ) }{
        };
         ${ props.theme.breakpoints.up( 'xs' ) }{
        };
  ` };
 
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

const useStyle = makeStyles( ({spacing, breakpoints}) => ({
    root: {
        background: '#FFEBE3',
        padding: spacing( 3 ),
        paddingTop: spacing( 5 ),
        paddingBottom: spacing( 5 ),
        border: 'thin solid blue',

        [breakpoints.up( 'md' )]: {
            padding: spacing( 0 ),
            paddingTop: spacing( 15 ),
            paddingBottom: spacing( 15 ),
            maxHeight: '100vh',

        },
    },
    listContainer: {}
}) )

const PriceList = () => {

    const classes = useStyle();
    const theme = createMuiTheme();

    return (
        <Grid container className={ classes.root }>
            <Grid item xs={ 0 } md={1} lg={ 2 }/>

            <Grid xs md={10} lg={ 8 } item container direction='column' >
                <Grid item>
                    <Typography variant='h5' gutterBottom>
                        PriceList
                    </Typography>
                </Grid>


                <Grid xs={12} container item
                      theme={ theme }
                      style={ {border: 'thick solid crimson'} }>

                    <Grid item container xs={9} sm={5} md={4} lg={3} direction='column'   >

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

                    <Grid item xs={0} sm={1} md={2} lg={3}/>

                    <Grid item container xs={9} sm={5} md={4} lg={3} direction='column' >
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

                    <Grid item xs={3} sm={0}/>

                </Grid>

            </Grid>

            <Grid item xs={ 0 } md={1} lg={ 2 }/>
        </Grid>
    );
};

export default PriceList;

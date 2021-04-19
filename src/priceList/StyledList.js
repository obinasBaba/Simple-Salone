import React from 'react';
import styled, {withTheme} from "styled-components";
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles( theme => ({
    root: {
        marginBottom: theme.spacing( 3 ),

    }
}) )



const StyledList = props => {
    const classes = useStyle();

    return (
        <Grid  item container direction='column' className={classes.root} >
            <Grid item>
                <Typography variant='h4' >
                    { props.title }
                </Typography>
            </Grid>

            <Grid item container>
                { props.list.map( item =>
                    <Grid item container justify='space-between'>

                        <Typography noWrap>{ item.serviceTitle }</Typography>
                        <Typography noWrap>{ item.price }</Typography>

                    </Grid> )
                }
            </Grid>

        </Grid>
    );
};

export default StyledList;

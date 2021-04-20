import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles( theme => ({
    root: {
        marginBottom: theme.spacing( 4 ),
        maxWidth: '410px',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '450px',
        }
    },
    list: {
        gap: '.3rem',
    }
}) )



const StyledList = props => {
    const classes = useStyle();

    return (
        <Grid  item container  className={classes.root} >
            <Grid item>
                <Typography variant='h4' >
                    { props.title }
                </Typography>
            </Grid>

            <Grid item container className={classes.list}>
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

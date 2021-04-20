import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import {Typography, useMediaQuery, useTheme, withStyles} from "@material-ui/core";
import React, {useState} from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {makeStyles} from "@material-ui/core/styles";

const Accordion = withStyles(theme => ({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        width: '100%',
        flex: 1,

        [theme.breakpoints.up('sm')]: {
            width: 'initial',
            border: 'none',
        },

        '&:before': {
            // display: 'none',
        },
        '&$expanded': {
            margin: 0,
            height: 'auto',

            [theme.breakpoints.up('lg')]: {
                height: '100%',
                width: 'initial',
            }
        },
    },
    expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        paddingLeft: 0,


        '&$expanded': {
            height: 56,
        },
    },
    content: {
        margin: 0,
        padding: 0,

        '&$expanded': {
            // margin: '12px 0',
        },
    },
    expanded: {
        // height: 56,
    },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        // padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
}))(MuiAccordionDetails);


const useStyle = makeStyles( theme => ({

    title: {
        flex: 1,
        height: 56,
        display: 'inline-block',
        padding: 12
    },

}) )

const FooterItem = ( {title, children} ) => {
    const classes = useStyle();
    const [expanded, setExpanded] = useState(false);

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const m2 = useMediaQuery(theme.breakpoints.down('xs'));

    const handleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <Accordion expanded={matches ? expanded : true}>

            <AccordionSummary

                expandIcon={
                   m2 ? <ExpandMoreIcon onClick={handleExpanded} /> : null
                }
                aria-controls="panel1a-content"
                id="panel1a-header">

                <Box className={classes.title}
                     onClick={(event) => event.stopPropagation()}
                     onFocus={(event) => event.stopPropagation()}>

                    <Typography noWrap >{ title }</Typography>
                </Box>

            </AccordionSummary>

            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default FooterItem;

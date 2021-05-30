import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, IconButton, TextField as MiuTextField, Typography, withStyles} from "@material-ui/core";
import FooterItem from "./fotterContentItem";
import data from "./data";
import Box from "@material-ui/core/Box";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles( theme => ({
    root: {
        /*backgroundImage: 'url(adam-winger-KVVjmb3IIL8-unsplash.jpg)',
        backgroundPosition: "bottom",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: '1',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: 'black',
            zIndex: '-1',
            opacity: '.99',
        },*/

        padding: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10),
            gap: '5rem',
        },

        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
    },
    details: {
        display: "flex",
        flexDirection: 'column',
        gap: '1.5rem',
    },
    days: {
        display: 'flex',
        maxWidth: '270px',
        justifyContent: 'space-between'
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    connect: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
}) )



const TextField = withStyles( theme => ({
    root: {
        color: 'white !important',
    }
}) )(MiuTextField);


const FooterContent = () => {
    const classes = useStyle();

    return (
        <Grid item container className={ classes.root }>
            <FooterItem title='Get the latest news'>
                <div className={classes.details}>
                    <Typography  color='primary'>
                        signup for mailing list to get our
                        latest news and giveaways!
                    </Typography>


                    <TextField label="Your Email" variant="outlined"/>
                    <Button  > Signup </Button>
                </div>
            </FooterItem>

            <FooterItem title='Hours'>
                <div className={classes.days}>
                    <Box display='flex' flexDirection='column'>
                        {
                            data.map(day => <Typography gutterBottom noWrap>{day.day}</Typography> )
                        }
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        {
                            data.map(day => <Typography gutterBottom noWrap>{day.time}</Typography> )
                        }
                    </Box>
                </div>
            </FooterItem>

            <FooterItem title='Contact'>
                <div className={classes.contact}>
                    <Box>
                        <Typography gutterBottom >Telephone: </Typography>
                        <Typography gutterBottom >517-8259-6554</Typography>
                    </Box>

                    <Box>
                        <Typography gutterBottom >Fax: </Typography>
                        <Typography gutterBottom >517-8259-6554</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom >Email: </Typography>
                        <Typography gutterBottom >info@mybeautysalon.com</Typography>
                    </Box>
                </div>
            </FooterItem>

            <FooterItem title='Connect'>
                <div className={classes.connect}>
                    <Box>
                        <Typography gutterBottom >
                            Follow us on social media to keep up
                            with all our contents and share your
                            make overs with us!
                        </Typography>
                    </Box>

                    <Box>
                         <IconButton color='inherit' edge='start' >
                             <FacebookIcon fontSize='large' />
                         </IconButton>
                        <IconButton color='inherit'>
                             <InstagramIcon  fontSize='large'/>
                         </IconButton >
                        <IconButton color='inherit'>
                             <TwitterIcon fontSize='large' />
                         </IconButton>
                    </Box>

                </div>
            </FooterItem>
        </Grid>
    );
};

export default FooterContent;


import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import FooterItem from "./fotterContentItem";
import data from "./data";
import Box from "@material-ui/core/Box";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles( theme => ({
    root: {
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
        gap: '1.4rem',
    },
    days: {
        display: 'flex',
        flexDirection: 'column',

        '& > :nth-child(n) ': {
            display: 'flex',
            gap: '1.3rem',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        }
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

        // gap: '2rem',
    }
}) )





const FooterContent = () => {
    const classes = useStyle();

    return (
        <Grid item container className={ classes.root }>
            <FooterItem title='Get the latest news'>
                <div className={classes.details}>
                    <Typography variant='h6' color='primary'>
                        signup for mailing list to get our
                        <Typography variant='h6' color='primary'>
                            latest news and giveaways!
                        </Typography>
                    </Typography>


                    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                    <Button variant="contained" color="primary"> Signup </Button>
                </div>
            </FooterItem>

            <FooterItem title='Hours'>
                <div className={classes.days}>
                    {
                        data.map(day => <Box>
                            <Typography gutterBottom noWrap>{day.day}</Typography>
                            <Typography gutterBottom noWrap>{day.time}</Typography>
                        </Box>)
                    }
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
                        <Typography gutterBottom noWrap>
                            Follow us on social media to keep up
                        </Typography>
                        <Typography noWrap>
                            with all our contents and share your
                        </Typography>
                        <Typography noWrap>
                            make overs with us!
                        </Typography>
                    </Box>

                    <Box>
                         <IconButton>
                             <FacebookIcon />
                         </IconButton>
                        <IconButton>
                             <InstagramIcon />
                         </IconButton>
                        <IconButton>
                             <TwitterIcon />
                         </IconButton>
                    </Box>

                </div>
            </FooterItem>
        </Grid>
    );
};

export default FooterContent;


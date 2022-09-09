import { Container } from '@mui/system';
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import royal_court from '../images/royal_court.jpg';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Dan_Jelly_Menu from './Dan_Jelly_Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSelector, useDispatch } from "react-redux";
import royal_back from '../images/royal_back.png'


// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    backImage: {
        backgroundImage: `url(${royal_court})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 1300,
        height: 500
    },

    box: {
        marginRight: 50
    },

    card: {
        width: 370,
        height: 350,
    },

    media: {
        height: 290,
        width: 370
    },

    action: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})

function Dan_Jelly_Restaurant() {
    const classes = useStyles();

    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();

    return (
        <div>
            <Container className={classes.backImage}>
                <Typography sx={{ paddingTop: 25, fontFamily: 'cursive', color: 'white', fontSize: 40 }}>
                    The
                </Typography>
                <Typography sx={{ fontFamily: 'cursive', color: 'white', fontSize: 70 }}>
                    <b>Dan Jelly Restaurant</b>
                </Typography>
            </Container>
            <Typography sx={{ marginTop: 5, fontSize: 40 }}>
               Menu
            </Typography>          

            <Dan_Jelly_Menu />

        </div>
    );
}

export default Dan_Jelly_Restaurant;
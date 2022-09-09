import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    box2: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline'
    },
}))

const pages = ['Register', 'Login'];

const Navbar1 = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("userdata");
        navigate('/')
    };

    const [login, setLogin] = useState(false)
    const [logout, setLogout] = useState(false)

    const handleSubmit = () => {
        setLogin(false);
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();


    var userdata = localStorage.getItem("userdata", JSON.stringify(userdata));
    var user_details = JSON.parse(userdata)


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            sx={{ my: 2, fontSize: 28, color: 'white', display: 'block', fontFamily: '"Helvetica Neue"' }}
                        >
                            FOOD DELIVERY APP
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 110 }} className={classes.box2}>
                        <Link to='/register'>
                            <Button
                                sx={{ my: 2, fontSize: 15, color: 'white', display: 'block' }}>
                                Register
                            </Button>
                        </Link>

                        {login ? (
                            <Link to='/'>
                                {user_details &&
                                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginLeft: 0}}>
                                        <h4 style={{ color: 'white', textDecoration: 'none' }}>{user_details.email}</h4>
                                        <Link to='/cart'>
                                            <Button sx={{ my: 2, fontSize: 25, color: 'white', display: 'block' }}>
                                                <ShoppingCartCheckoutIcon /> {cart.length}
                                            </Button>
                                        </Link>

                                        <Button sx={{ my: 2, fontSize: 15, color: 'white', display: 'block' }} onClick={handleSignOut}>
                                            Logout
                                        </Button>
                                    </div>}
                            </Link>) : (
                            <Link
                                to="/login"
                                onClick={() => {
                                    handleSignOut();
                                    setLogin(true);
                                }}>
                                <Button
                                    sx={{ my: 2, fontSize: 15, color: 'white', display: 'block' }}>
                                    Login
                                </Button>


                            </Link>

                        )}

                        {/* <Link to='/cart'>
                            <Button sx={{ my: 2, fontSize: 25, color: 'white', display: 'block' }}>
                                <ShoppingCartCheckoutIcon /> {cart.length}
                            </Button>
                        </Link> */}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


export default Navbar1;

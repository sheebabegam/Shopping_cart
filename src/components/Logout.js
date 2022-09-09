import * as React from 'react';
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
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    box2: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline'
    },
}))

const pages = ['Register', 'Logout'];

const Logout = () => {
    const classes = useStyles();

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

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 110 }} className={classes.box2}>
                        <Link to='/register'>
                            <Button
                                sx={{ my: 2, fontSize: 15, color: 'white', display: 'block' }}>
                                Register
                            </Button>
                        </Link>

                        <Link to='/login'>
                            <Button
                                sx={{ my: 2, fontSize: 15, color: 'white', display: 'block' }}>
                                Logout
                            </Button>
                        </Link>

                        <Link to='/cart'>
                            <Button sx={{ my: 2, fontSize: 25, color: 'white', display: 'block' }}>
                                <ShoppingCartCheckoutIcon /> {cart.length}
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


export default Logout;

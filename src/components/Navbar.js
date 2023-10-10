import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// import "../styles/Navbar.css";
import { Reorder } from '@mui/icons-material';
import { AppBar, CssBaseline, Toolbar, Typography, Container, Box, Button, IconButton, Drawer, Menu, MenuItem } from '@mui/material';
// import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material';


function Navbar() {

    // const classes = useStyles();
    const themeOriginal = createTheme();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // const [open, setState] = useState(false);
    // const toggleDrawer = (open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }
    //     //changes the function state according to the value of open
    //     setState(open);
    // };

    // const theme = createTheme({
    //     palette: {
    //         primary: {
    //             main: '#1976d2',
    //             light: '#42a5f5',
    //             dark: '#1565c0',
    //             contrastText: 'white',
    //         },
    //     },
    //     typography: {
    //         fontFamily: [
    //             '-apple-system',
    //             'BlinkMacSystemFont',
    //             '"Segoe UI"',
    //             'Roboto',
    //             '"Helvetica Neue"',
    //             'Arial',
    //             'sans-serif',
    //             '"Apple Color Emoji"',
    //             '"Segoe UI Emoji"',
    //             '"Segoe UI Symbol"',
    //         ].join(','),
    //     },
    //     breakpoints: {
    //         values: {
    //             xs: 0,
    //             sm: 600,
    //             md: 900,
    //             lg: 1200,
    //             xl: 1536,
    //         },
    //     },
    // });


    const linkSx = {
        //margin: theme.spacing(1, 1.5)
    }

    const appBarSx = {
        //position: "static",
        //borderBottom: `1px solid ${theme.palette.divider}`,
        //color: "default",
        // elevation={0},
    }

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);

    return (
        <ThemeProvider theme={themeOriginal}>
            <CssBaseline />
            <AppBar position="static" color="inherit">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            href=""
                        >
                            OM
                        </Typography> */}

                        <Typography variant="h6">
                            ॐ
                        </Typography>

                        <IconButton>

                        </IconButton>

                        {/* <Box>
                            <MenuIcon>
                                <Button
                                    onClick={() => {
                                        setExpandNavbar((prev) => !prev)
                                    }}
                                >
                                    <Reorder />
                                </Button>
                            </MenuIcon>
                        </Box> */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                component={RouterLink}
                                to="/"
                                sx={{ my: 2, color: 'grey', display: 'block' }}
                            >
                                Home
                            </Button>

                            <Button
                                component={RouterLink}
                                to="/projects"
                                sx={{ my: 2, color: 'grey', display: 'block' }}
                            >
                                Certifications - Projects
                            </Button>

                            <Button
                                component={RouterLink}
                                to="/experience"

                                sx={{ my: 2, color: 'grey', display: 'block' }}
                            >
                                Education - Experience
                            </Button>
                        </Box>

                        {/* <nav>
                            <Link to="/" variant="button">
                                Home
                            </Link>
                            <Link to="/projects" variant="button" >
                                Projects
                            </Link>
                            <Link to="/experience" variant="button">
                                Education_Experience
                            </Link>
                        </nav> */}
                    </Toolbar>
                </Container>
            </AppBar>


            {/* old info */}
            {/* 
            <div className="navbar" id={expandNavbar ? "open" : "close"}>
                <div className='toggleButton'>
                    <button
                        onClick={() => {
                            setExpandNavbar((prev) => !prev)
                        }}
                    >
                        <Reorder />
                    </button>
                </div>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Activities</Link>
                    <Link to="/experience">Education-Experience</Link>
                </div>
            </div> */}
            {/* old info */}
        </ThemeProvider >






    );
}

export default Navbar;
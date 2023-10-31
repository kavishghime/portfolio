import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
// import "../styles/Footer.css";
import { ThemeProvider, IconButton, Link, AppBar, CssBaseline, createTheme, Container, Toolbar, Typography, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {

    const themeOriginal = createTheme();
    return (

        <ThemeProvider theme={themeOriginal}>
            <CssBaseline />
            <AppBar position="static" color="inherit">

                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h7"
                            gutterBottom
                        >
                            {/* <CopyrightIcon /> */}
                            2023 Kavish
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* <div className='footer'>
                <div className='socialMedia'>
                    <IconButton onClick={() => window.open('http://www.linkedin.com/in/kavishghime')}>
                        <LinkedIn />
                    </IconButton>
                    <Link href="http://www.linkedin.com/in/kavishghime" target="_blank">
                        <LinkedIn />
                    </Link>
                    <GitHub />
                </div>
                <p>&copy; 2023 kavishghime.com</p>
            </div> */}

        </ThemeProvider>
    )
}

export default Footer;
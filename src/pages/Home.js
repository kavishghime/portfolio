import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
// import "../styles/Home.css";
import { CssBaseline, IconButton, Link, Toolbar, Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
// import { Typography } from '@mui/material/styles/createTypography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

function Home() {

    const themeOriginal = createTheme();

    return (
        <ThemeProvider theme={themeOriginal}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Hello! I am Kavish
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Product Engineer for mobile apps and a Computer Science graduate with a love for software engineering & development!
                    </Typography>
                    <Box align="center">
                        <Link href="http://www.linkedin.com/in/kavishghime" target="_blank">
                            <LinkedIn fontSize="large" color="primary" />
                        </Link>
                    </Box>
                    {/* <Box align="center">
                        <Link href="https://docs.google.com/document/d/1G4RSmnMeT-wwHt9wD_28OuD8T9fBgrxVgzw4Q4d-iAc/edit?usp=sharing" target="_blank">
                            Resume
                        </Link>
                    </Box> */}
                </Container>

                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        component="h3"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Skills
                    </Typography>
                    <Box align="center">
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Languages"
                                    secondary="JavaScript"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Frameworks & Database"
                                    secondary="React, Node.js, MySQL, Microsoft SQL Server, Material UI"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="ArcGIS"
                                    secondary="ArcGIS Maps SDK for [Swift (iOS), .NET, Java, Qt], ArcGIS Maps SDK for JavaScript, ArcGIS Platform, ArcGIS REST API, ArcGIS Online, ArcGIS Pro, ArcGIS Enterprise and ArcGIS API for Python"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Tools & Platforms"
                                    secondary="Git, GitHub, Visual Studio (Code, Windows, Mac), Xcode, Postman, Windows, MacOS, Salesforce, OAuth"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </Box>



            {/* <Container maxWidth="sm">
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h2" gutterBottom>
                        Kavish Ghime
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        SDK analyst with a love for software engineering & development!
                    </Typography>

                </Box>
            </Container>

            <Container maxWidth="sm">
                <Link href="http://www.linkedin.com/in/kavishghime" target="_blank">
                    <LinkedIn />
                </Link>
            </Container>

            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    Skills
                </Typography>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                    Skills
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Languages"
                            secondary="JavaScript, Java"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Frameworks & Database"
                            secondary="React, Node.js, MySQL, Microsoft SQL Server"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="ArcGIS"
                            secondary="ArcGIS Maps SDK for JavaScript, ArcGIS Maps SDK for Swift, ArcGIS Maps SDK for .NET, ArcGIS REST API, ArcGIS Pro, ArcGIS Enterprise, ArcGIS Online and ArcGIS API for Python"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Tools & Platforms"
                            secondary="Git, GitHub, Visual Studio (Code, Windows, Mac), Xcode, Postman, Windows, MacOS"
                        />
                    </ListItem>
                </List>
            </Container> */}



            {/* <div className='home'>
                <div className='about'>
                    <h1>Hello world, my name is</h1>
                    <h2>KAVISH</h2>
                    <div className='prompt'>
                        <p>
                            SDK analyst with a love for software engineering & development!
                        </p>
                        <p>
                            <IconButton onClick={() => window.open('http://www.linkedin.com/in/kavishghime')}>
                                <LinkedIn />
                            </IconButton>

                            <Link href="http://www.linkedin.com/in/kavishghime" target="_blank">
                                <LinkedIn />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    <ol className='list'>
                        <li className='item'>
                            <h3>Languages</h3>
                            <span>
                                JavaScript, Java
                            </span>
                        </li>
                        <li className='item'>
                            <h3>Frameworks & Database</h3>
                            <span>
                                React, Node.js, MySQL, Microsoft SQL Server
                            </span>
                        </li>
                        <li className='item'>
                            <h3>ArcGIS</h3>
                            <span>
                                ArcGIS Maps SDK for JavaScript, ArcGIS Maps SDK for Swift, ArcGIS Maps SDK for .NET, ArcGIS REST API, ArcGIS Pro, ArcGIS Enterprise, ArcGIS Online and ArcGIS API for Python
                            </span>
                        </li>
                        <li className='item'>
                            <h3>Tools & Platforms</h3>
                            <span>
                                Git, GitHub, Visual Studio (Code, Windows, Mac), Xcode, Postman, Windows, MacOS
                            </span>
                        </li>
                    </ol>
                </div>
            </div> */}


        </ThemeProvider>
    )
}

export default Home;
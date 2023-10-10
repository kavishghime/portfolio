import { GitHub } from '@mui/icons-material';
import { createTheme, Card, CardMedia, Container, CssBaseline, Grid, ThemeProvider, Typography, CardContent, Button, CardActions, Link, } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';

function ProjectItem({ image, name, id, subtext, github, link, skills }) {

    const navigate = useNavigate();
    const themeOriginal = createTheme();
    return (

        <ThemeProvider theme={themeOriginal}>
            <CssBaseline />

            <Grid item key={id} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}

                >
                    <CardMedia
                        component="div"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        // image="${image}"
                        //image={`url($({image}))`}
                        image={image}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="title" color="inherit" noWrap>
                            &nbsp;
                        </Typography>
                        <Typography>
                            {subtext}
                        </Typography>
                        <Typography variant="title" color="inherit" noWrap>
                            &nbsp;
                        </Typography>
                        <Typography>
                            Skills: {skills}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small">
                            <Link href={link} target="_blank">
                                <LinkIcon />
                            </Link>
                        </Button>
                        <Button size="small">
                            <Link href={github} target="_blank">
                                <GitHub />
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* <div
                className='projectItem'
                onClick={() => {
                    navigate("/projects/" + id);
                }}
            >
                <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
                <h3>{name}</h3>
            </div> */}

        </ThemeProvider >
    )
}

export default ProjectItem;
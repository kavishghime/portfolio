import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from '../helpers/ProjectList';

// import "../styles/Projects.css";
import { Box, Card, CardMedia, Container, CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';

function Projects() {
    const themeOriginal = createTheme();
    return (
        <ThemeProvider theme={themeOriginal}>
            <CssBaseline />

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 1,
                    pb: 6,
                }}
            >
                <Container sx={{ py: 8 }} maxWidth="md" >
                    <Grid container spacing={4}>
                        {ProjectList.map((project, idx) => {
                            return <ProjectItem
                                id={idx}
                                name={project.name}
                                image={project.image}
                                subtext={project.subtext}
                                github={project.github}
                                link={project.link}
                                skills={project.skills}
                            />
                        })}
                    </Grid>
                </Container>
            </Box>

            {/* <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {ProjectList.map((project, idx) => {
                        return <ProjectItem id={idx} name={project.name} image={project.image} />
                    })}
                </Grid>
            </Container> */}




            {/* <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {ProjectList.map((project, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                >
                                </CardMedia>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}








            {/* <Container maxWidth="sm">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        {ProjectList.map((project, idx) => {
                            return <ProjectItem id={idx} name={project.name} image={project.image} />
                        })}
                    </Grid>
                </Grid>


                <div className='projects'>
                    <h2>Certifications</h2>
                    <div className='projectList'>
                        {ProjectList.map((project, idx) => {
                            return <ProjectItem id={idx} name={project.name} image={project.image} />
                        })}
                    </div>
                </div>

            </Container> */}

        </ThemeProvider>

    )
}

export default Projects;
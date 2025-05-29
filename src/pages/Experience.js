import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from '@mui/icons-material';
import { Box, CssBaseline, List, ListItem, ListItemText, ThemeProvider, Typography, createTheme } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';



function Experience() {
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

                <Timeline position="alternate">

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary">
                            2008 - 2012
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <School />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span">
                                Nagpur University, Nagpur, India
                            </Typography>
                            <Typography variant="h6">Bachelor of Engineering degree</Typography>
                            <Typography variant="h6">Computer Science</Typography>
                        </TimelineContent>
                    </TimelineItem>


                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2011 - 2012
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <Work />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span">
                                Software Engineer Trainee - Softech Solutions
                            </Typography>
                            <Typography variant="h6">Nagpur, India</Typography>
                            <Typography>
                                Developed an e-commerce web-application platform for merchant-customer authentication.
                            </Typography>
                            <Typography>
                                The project demonstarted the workflow of SSL protocol.
                            </Typography>
                            <Typography>
                                Developed using C# and ASP.NET
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>


                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary">
                            2013 - 2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <School />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{ py: '12px', px: 2 }}
                        >
                            <Typography variant="h5" component="span">
                                San Diego State University, San Diego, California
                            </Typography>
                            <Typography variant="h6">Master of Science degree</Typography>
                            <Typography variant="h6">Computer Science</Typography>
                            <Typography>
                                <List>
                                    <ListItem>
                                        Thesis: A Dynamic Mapping System for Italian Study Abroad Program
                                    </ListItem>
                                </List>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary">
                            2015 - 2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <Work />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span">
                                Graduate Assistant - LARC LABS San Diego State University
                            </Typography>
                            <Typography variant="h6">San Diego, California</Typography>
                            <Typography>
                                Developed a full-stack web system for students and faculty to share their experiences during Study Abroad programs.
                            </Typography>
                            <Typography>
                                Researched and designed this system for Master of Science degree Thesis.
                            </Typography>
                            <Typography>
                                The system was used for multiple Study Abroad programs like Japanese, French, Spanish, etc.
                            </Typography>
                            <Typography>
                                Developed using PHP, JavaScript, ArcGIS Online Story Maps, MySQL, HTML, CSS and jQuery
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>



                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary">
                            2017 - 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <Work />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span">
                                Support Analyst ArcGIS Developers APIs & SDKs - ESRI
                            </Typography>
                            <Typography variant="h6">Redlands, California</Typography>
                            <Typography>
                                <List>
                                    <ListItem>
                                        Assist users with developing applications using "ArcGIS Developers" SDKs.
                                    </ListItem>
                                    <ListItem>
                                        Diagnose code issues in ArcGIS Developers SDK and resolve them through agile collaboration.
                                    </ListItem>
                                    <ListItem>
                                        Provide high quality support on the SDK-API, REST web services and GIS spatial data.
                                    </ListItem>
                                    <ListItem>
                                        Subject Matter Expert (SME) for ArcGIS Maps SDK for JavaScript, ArcGIS Maps SDK for Swift and .NET.
                                    </ListItem>
                                    <ListItem>
                                        Mentor and guide other analysts on technical skills required to support ArcGIS Developers SDKs.
                                    </ListItem>
                                    <ListItem>
                                        Document troubleshooting approach, findings, and technical details.
                                    </ListItem>
                                    <ListItem>
                                        Identify software issues and log defects for product fixes or improvements.
                                    </ListItem>
                                    <ListItem>
                                        Partner with support leadership to innovate and evolve the product support approach.
                                    </ListItem>
                                </List>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>



                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary">
                            2024 - Present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <Work />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span">
                                Product Engineer - ESRI
                            </Typography>
                            <Typography variant="h6">Redlands, California</Typography>
                            <Typography>
                                <List>
                                    <ListItem>
                                    Work as part of a development team to build, test, and release Field Maps app (Android and iOS devices) and web
                                    apps.
                                    </ListItem>
                                    <ListItem>
                                    Work with product teams across ArcGIS to influence upcoming development.
                                    </ListItem>
                                    <ListItem>
                                    Evaluate and provide feedback on new software designs through design and implementation reviews.
                                    </ListItem>
                                    <ListItem>
                                    Perform in-field testing and customer workflow evaluation to ensure product quality and release readiness.
                                    </ListItem>
                                    <ListItem>
                                    Write conceptual topics, blog articles, and step-by-step tutorials geared towards GIS staff or mobile workers to aid
                                    in the deployment of our apps.
                                    </ListItem>
                                    
                                </List>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>




                </Timeline>

            </Box>





            {/* <div className='experience'>
                <VerticalTimeline lineColor='#3e497a'>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--education'
                        date='2008 - 2012'
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<School />}
                    >
                        <h3 className='vertical-timeline-element-title'>
                            Nagpur University, Nagpur, India
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor of Engineering degree
                        </h4>
                        <p><b>Computer Science</b></p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011 - 2012"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Engineer Trainee - Softech Solutions
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Nagpur, India
                        </h4>
                        <p>Developed an e-commerce web-application platform for merchant-customer authentication.</p>
                        <p>The project demonstarted the workflow of SSL protocol.</p>
                        <p>Developed using <b>C# and ASP.NET</b></p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2013 - 2017"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<School />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            San Diego State University, San Diego, California
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Master of Science degree
                        </h4>

                        <p><b>Computer Science</b></p>
                        <p>Thesis: A Dynamic Mapping System for Italian Study Abroad Program</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2015 - 2017"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Graduate Assistant - LARC LABS San Diego State University
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            San Diego, California
                        </h4>
                        <p>Developed a full-stack web system for students and faculty to share their experiences during Study Abroad programs.</p>
                        <p>Researched and designed this system for Master of Science degree Thesis.</p>
                        <p>The system was used for multiple Study Abroad programs like Japanese, French, Spanish, etc.</p>
                        <p>Developed using <b>PHP, JavaScript, ArcGIS Online Story Maps, MySQL, HTML, CSS and jQuery</b></p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017 - Present"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            ArcGIS SDK Programming Analyst - ESRI
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Redlands, California
                        </h4>
                        <p>Assist users with developing applications using "ArcGIS Developers" SDKs.</p>
                        <p>Diagnose code issues in ArcGIS Developers SDK and resolve them through agile collaboration.</p>
                        <p>Provide high quality support on the SDK-API, REST web services and GIS spatial data.</p>
                        <p>Subject Matter Expert (SME) for <b>ArcGIS Maps SDK for JavaScript, ArcGIS Maps SDK for Swift and .NET</b>.</p>
                        <p>Mentor and guide other analysts on technical skills required to support ArcGIS Developers SDKs.</p>
                        <p>Document troubleshooting approach, findings, and technical details.</p>
                        <p>Identify software issues and log defects for product fixes or improvements. </p>
                        <p>Partner with support leadership to innovate and evolve the product support approach.</p>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div> */}


        </ThemeProvider>
    )
}

export default Experience;
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";
import { IconButton, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    function handlePageChange() {
        window.location.href = "https://github.com/kavishghime/License-Plate-Store-React-and-TypeScript.git";
    }

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />

            <p>
                {project.description}<br />
                <b>Skills:</b> {project.skills}
            </p>

            <p>
                <Link href={project.link} target="_blank">
                    <LinkIcon />
                </Link>
                <br />
                <Link href={project.github} target="_blank">
                    <GitHub />
                </Link>
            </p>

        </div>
    )
}

export default ProjectDisplay;
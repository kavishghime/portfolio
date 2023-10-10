import React from 'react';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';

function Url() {
    return (
        <div>
            <IconButton onClick={() => window.open('http://www.linkedin.com/in/kavishghime')}>
                {/* <GitHub /> */}
            </IconButton>
        </div>
    )
}

export default Url
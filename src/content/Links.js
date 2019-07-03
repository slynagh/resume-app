import React from 'react';
import { Divider } from '@material-ui/core';

export default function (){
    return(
        <React.Fragment>
            <p>Personal Website</p>
            <p><a href="http://stevenlynagh.com/" target="_blank" rel="noopener noreferrer">http://stevenlynagh.com/</a></p>
            <Divider/>

            <p>LinkedIn</p>
            <p><a href="https://www.linkedin.com/in/stevenlynagh/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/stevenlynagh/</a></p>
            <Divider/>

            <p>Stack Overflow</p>
            <p><a target="_blank" href="https://stackoverflow.com/users/2790882/slynagh?tab=profile" rel="noopener noreferrer">https://stackoverflow.com/users/2790882/slynagh?tab=profile</a></p>
            <Divider/>
            <p>GitHub</p>
            <p><a href="https://github.com/slynagh" target="_blank" rel="noopener noreferrer">https://github.com/slynagh</a></p>
            <Divider/>

            <p>FreeCodeCamp</p>
            <p><a href="https://www.freecodecamp.org/stevelynagh" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org/stevelynagh</a></p>
            
        </React.Fragment>
    )
}
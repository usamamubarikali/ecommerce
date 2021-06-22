import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const Logo = () => (
    <IconButton edge="start" className={classes.menuButton} >
        <img src="/static/UR-logo.png" alt="logo" width="50" height="45" />
    </IconButton>
);

export default Logo;
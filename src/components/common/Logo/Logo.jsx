import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import logoSVG from './Triangle-Logo.svg';

const Logo = () => {
    const classes = useStyles();
    return (
        <NavLink to='/' className={classes.logo} role='logo'>
            <img
                alt='logo'
                src={logoSVG}
                className={classes.img}
            />
            <Typography variant='h6' className={classes.title}>
                tech
                <span className={classes.titleLast}>mart</span>
            </Typography>
        </NavLink>
    );
};

export default Logo;

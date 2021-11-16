import React, { useCallback, useState } from "react";
import {
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Grid,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from './styles';

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = useCallback((e) => {
        setAnchorEl(e.currentTarget);
    }, [setAnchorEl]);

    const handleCloseMenu = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl])

    return (
        <>
            <Toolbar className={classes.NavBar} position="static">
                <Grid
                    container
                    spacing={2}
                    style={{ margin: 0, width: '100%', alignItems: 'center' }}
                >
                    <Grid item xs={6} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="inherit" >
                            <NavLink to="/" className={classes.linkNavBar}>
                                Главная
                            </NavLink>
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            aria-controls='menu'
                            onClick={handleOpenMenu}
                            color="inherit"
                        >
                            <Typography className={classes.linkNavBar}>
                                Меню
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="inherit" >
                            <NavLink to="/aboutus" className={classes.linkNavBar}>
                                О нас
                            </NavLink>
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="inherit" >
                            <NavLink to="/contacts" className={classes.linkNavBar}>
                                Контакты
                            </NavLink>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
            <Menu
                className={classes.menu}
                id='menu'
                onClose={handleCloseMenu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/applestore" className={classes.menuItem}>
                        Apple Store
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/laptops" className={classes.menuItem}>
                        Ноутбуки
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/tablets" className={classes.menuItem}>
                        Планшеты
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <NavLink to="/smartphones" className={classes.menuItem}>
                        Смартфоны
                    </NavLink>
                </MenuItem>
            </Menu>
        </>
    );
};

export default NavBar;
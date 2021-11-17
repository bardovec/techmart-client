import React, { useCallback, useState } from 'react';
import {
    AppBar,
    Button,
    TextField,
    Grid,
    Box,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../common/Logo/Logo';
import { useStyles } from './styles';
import { useActions } from '../../hooks/useActions.js';
import CartCounter from '../common/CartCounter/CartCounter';

const userLoginSelector = (state) => state.userLogin;

const Header = () => {
    const classes = useStyles();
    const { logout } = useActions()
    const { userInfo } = useSelector(userLoginSelector);
    const [seachValue, setSearchValue] = useState('');

    const { listProductsFiltered } = useActions();

    const searchForProducts = useCallback(() => {
        listProductsFiltered(seachValue);
    }, [seachValue]);

    const inputChangeHandler = useCallback((e) => setSearchValue(e.target.value));

    return (
        <AppBar position='static' className={classes.header}>
            <Grid
                container
                spacing={2}
                style={{ margin: 0, width: '100%', alignItems: 'center' }}
            >
                <Grid item xs={9} sm={!userInfo ? 6 : 7} md={2} className={classes.gridLogo}>
                    <Logo />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.gridInput}>
                    <Box className={classes.containerInput}>
                        <Grid item xs={8} sm={10} md={10}>
                            <TextField
                                className={classes.search}
                                InputProps={{
                                    className: classes.search,
                                }}
                                placeholder='Поиск'
                                variant='outlined'
                                role='seachHeader'
                                onChange={inputChangeHandler}
                            />
                        </Grid>
                        <Grid item xs={4} sm={2} md={2}>
                            <button className={classes.buttonSearch} onClick={searchForProducts} role='buttonSeachHeader'><span>Поиск</span></button>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={3} sm={!userInfo ? 1 : 2} md={1} className={classes.gridCart}>
                    <Button color='inherit'>
                        <NavLink to='/cart'>
                            <svg width='35' height='35' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='white' strokeLinecap='round' strokeLinejoin='round' className={classes.shoppingCart}>
                                <path d='M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z' />
                                <path d='M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z' />
                                <path d='M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6' />
                            </svg>
                            <CartCounter />
                        </NavLink>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={!userInfo ? 5 : 2} md={3} className={classes.gridLogin}>
                    <Grid
                        container
                        spacing={2}
                        style={{ margin: 0, width: '100%' }}
                    >
                        {!userInfo
                            ?
                            <Grid item xs={6} sm={4} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color='inherit' aria-label='signin-btn'>
                                    <NavLink to='/signin' className={classes.linkCoponent}>
                                        Войти
                                    </NavLink>
                                </Button>
                            </Grid>

                            :
                            <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color='inherit' onClick={logout} className={classes.linkCoponent} aria-label='logout-btn'>
                                    Выйти
                                </Button>
                            </Grid>
                        }
                        {
                            !userInfo &&
                            <Grid item xs={6} sm={8} md={8} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color='inherit'>
                                    <NavLink to='/signup' className={classes.linkCoponent}>
                                        Регистрация
                                    </NavLink>
                                </Button>
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Header;
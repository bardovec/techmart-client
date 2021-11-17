import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import SigninForm from './SigninForm';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom'

const userLoginSelector = (state) => state.userLogin;

const Signin = () => {
    const { userInfo } = useSelector(userLoginSelector);
    const history = useHistory();
    const classes = useStyles();

    const redirect = () => {
        setTimeout(() => {
            history.push('/');
        }, 1000)
    }

    return (
        <section className='signin-page'>
            <div className={classes.wrapper}>
                {userInfo
                    ? (
                        <Box className={classes.itemLogin}>
                            <h2>Авторизация успешна</h2>
                            {redirect()}
                        </Box>
                    ) : (
                        <>
                            <h2 className={classes.title}>Авторизация</h2>
                            <SigninForm />
                        </>
                    )}
            </div>
        </section>
    );
};

export default Signin;

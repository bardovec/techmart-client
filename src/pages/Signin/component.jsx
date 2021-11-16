import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@material-ui/core';
import SigninForm from './SigninForm';
import { useStyles } from './styles';
import { useActions } from '../../hooks/useActions';

const userLoginSelector = (state) => state.userLogin;

const Signin = () => {
  const { userInfo } = useSelector(userLoginSelector);
  const { logout } = useActions();
  const classes = useStyles();

  return (
    <section className='signin-page'>
      <div className={classes.wrapper}>
        {userInfo
          ? (
            <>
              <h3>Вы уже представились системе</h3>
              <p>
                Для выхода из аккаунта&nbsp;
                <Link className={classes.link} onClick={logout}>нажмите здесь</Link>
              </p>
            </>
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

import React from 'react';
import SignupForm from './SignupForm';
import { useStyles } from './styles';

const Signup = () => {
  const classes = useStyles();

  return (
    <section className={classes.page}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Регистрация</h2>
        <h5 className={classes.note}>Все поля обязательны</h5>
        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;

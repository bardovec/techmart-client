import React, { useEffect, useState } from 'react';
import {  Button, Typography,  } from "@material-ui/core";
import { useStyles } from '../style';
import UserService from '../../../../services/UserService';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Loader from '../../../../components/common/Loader'
const Checkoutauth = ({removeAllFromCart}) => {
  const style = useStyles()
  
  const cart = useSelector(state => state.cart.cartItems);
  
  const history = useHistory()

  const [user, setUser] = useState(null)
  let data;
  useEffect( async () => {
   const res = await UserService.ping()
    data = res.data
    setUser({
      name : data.firstName,
      secondName : data.lastName,
      phone:data.telephone
    })
    },[data])
     
    const submit = (values) => {
      console.log(`Заказ :
      Имя: ${user.name},
      Фамилия:${user.secondName}
      Номер телефона${user.phone}
      Заказ:`, cart);
      history.push(`/`)

      return removeAllFromCart()
    };

  if(user === null) return <Loader/>
  return (
    <div className={style.formStyle}>
      <Typography  className={style.authInput}>
        Имя: {user.name}
      </Typography>
      <Typography  className={style.authInput}>
        Фамилия: {user.secondName}
      </Typography>
      <Typography  className={style.authInput}>
        Номер телефона: {user.phone}
      </Typography>
      <Button type="submit" variant="contained" onClick={submit} className={style.button}>
            Оформить заказ
          </Button>
    </div>
  );
}

export default Checkoutauth;

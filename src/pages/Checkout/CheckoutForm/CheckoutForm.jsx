import React from "react";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useStyles } from "./style";
import { useHistory } from "react-router";

import TextfieldWrapper from "../../../components/common/forms/TextfieldWrapper";

const requiredMessage = "Обязательно";
const shema = Yup.object().shape({
  firstName: Yup.string().required(requiredMessage).default(""),
  lastName: Yup.string().required(requiredMessage).default(""),
  telephone: Yup.number().required(requiredMessage).default(""),
});

const Checkoutform = ({ formFieldsData, removeAllFromCart }) => {
  const style = useStyles();

  const initialValues = {
    firstName: "",
    lastName: "",
    telephone: "",
  };
  const cart = useSelector(state => state.cart.cartItems);
  console.log(cart);
  const history = useHistory();
  const submit = (values) => {
    console.log(`Заказ :
    Имя: ${values.firstName},
    Фамилия:${values.lastName}
    Номер телефона${values.telephone}
    Заказ:`, cart)
    history.push(`/`);

    return removeAllFromCart();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={submit}
      >
        <Form className={style.formStyle}>
          {formFieldsData.map((fieldParams) => (
            <TextfieldWrapper
              key={fieldParams.label}
              className={style.formInput}
              name={fieldParams.name}
              {...fieldParams}
            />
          ))}
          <Button type="submit" variant="contained" className={style.button}>
            Оформить заказ
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Checkoutform;

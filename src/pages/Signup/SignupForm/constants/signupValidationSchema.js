import * as Yup from 'yup';

const requiredMessage = 'Обязательно';
const tooShortMessage = 'Минимум 2 символа';
const phoneRegExp = /^\+?(?:38)?\s?\(?0\s?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const passwordRegExp = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$/u;

export default Yup.object().shape({
  firstName: Yup.string()
    .required(requiredMessage)
    .min(2, tooShortMessage)
    .default(''),
  lastName: Yup.string()
    .required(requiredMessage)
    .min(2, tooShortMessage)
    .default(''),
  login: Yup.string()
    .required(requiredMessage)
    .min(2, tooShortMessage)
    .max(20, 'Слишком много символов')
    .default(''),
  email: Yup.string()
    .required(requiredMessage)
    .email('Неверный формат почты')
    .default(''),
  telephone: Yup.string()
    .required(requiredMessage)
    .default('')
    .matches(phoneRegExp, 'Неверный формат номера'),
  password: Yup.string()
    .required(requiredMessage)
    .default('')
    .matches(passwordRegExp, {
      message: 'Должен содержать 8 символов, заглавную букву и цифру',
      excludeEmptyString: true,
    }),
  repeatPassword: Yup.string().default('').when('password', {
    is: '',
    then: Yup.string().notRequired(),
    otherwise: Yup
      .string()
      .required('Повторите ваш пароль')
      .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  })
  ,
});

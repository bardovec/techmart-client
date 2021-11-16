export default [
  {
    name: 'firstName',
    label: 'Имя',
  },
  {
    name: 'lastName',
    label: 'Фамилия',
  },
  {
    name: 'login',
    label: 'Логин',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    helperText: 'ivan@gmail.com',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    helperText: 'Должен содержать 8 символов, заглавную букву и цифру',
  },
  {
    name: 'repeatPassword',
    label: 'Повторите пароль',
    type: 'password',
  },
  {
    name: 'telephone',
    label: 'Номер телефона',
    helperText: '+XX XXX XXX XX XX',
  },
];

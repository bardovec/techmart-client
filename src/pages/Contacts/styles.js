import { makeStyles } from '@material-ui/core';
import { styles } from '../../utils/UserInterfaceConstants';

const useStyles = makeStyles(() => ({
  container: {
    padding: '15px 20px 70px',
  },
  map: {
    padding: 0,
    boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
  },
  links: {
    display: 'block',
    color: 'black',
    fontStyle: 'italic',
    fontSize: '1.3rem',
    marginBottom: '15px',

    '&:hover': {
      color: '#3ec0dd',
      textDecoration: 'none',
    },
  },
  icon: {
    fontStyle: 'normal',
    fontWeight: '500',
    marginRight: '20px',
  },
  item: {
    marginTop: '50px',
  },
  header: {
    letterSpacing: ' 11px',
    textTransform: 'uppercase',
    fontSize: '2.3rem',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '1.8rem',
    fontWeigt: 'bold',
    margin: '30px 0 20px',
  },
  text: {
    fontSize: '1.4rem',
    fontStyle: 'italic',
    marginTop: '10px',
  },
  form: {
    marginTop: '90px',
  },
  textField: {
    margin: '40px 0',

    '&.MuiInputBase-input:focus': {
      outline: '1px solid  #3ec0dd',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: styles.colorGrey,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: styles.colorGrey,
    },
    '& .MuiInputLabel-formControl': {
      color: styles.colorGrey,
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: styles.colorGrey,
    },
  },

  contactButton: {
    color: '#3ec0dd',
    fontSize: '18px',
    backgroundColor: 'white',
    width: '185px',
    borderRadius: '5px',
    border: '1px solid  #3ec0dd',
    padding: '10px 0',

    '&:hover': {
      color: 'white',
      backgroundColor: '#3ec0dd',
    },
  },
}));
export default useStyles;

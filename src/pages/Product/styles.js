import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    margin: ' 0  0 30px',
    padding: '25px 25px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
  },
  coloredBtn: {
    marginRight: '10px',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '0.5px solid #A6A6A6',
  },
  item: {
    textAlign: 'left',
  },
  header: {
    fontWeight: 600,
    margin: '0 0 10px',
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  price: {
    fontWeight: 600,
    marginBottom: '3.5rem',
  },
  container: {
    marginBottom: '3.5rem',
    fontSize: '1.3rem',
  },
  text: {
    margin: '3.5rem 0 ',
    fontSize: '1.2rem',
  },
  exist: {
    fontSize: '1.2rem',
    color: 'rgb(87,174,0)',
    marginLeft: '10px',
  },
  noExist: {
    fontSize: '1.2rem',
    color: 'red',
  },
  garanty: {
    fontSize: '1.2rem',
    marginLeft: '10px',
  },
  memoryButton: {
    marginLeft: '10px',
  },
  productButton: {
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

  [theme.breakpoints.down('sm')]: {
    price: {
      marginBottom: '3rem',
    },
    container: {
      marginBottom: '3rem',
    },
    text: {
      margin: '3rem 0 ',
    },
  },

  [theme.breakpoints.down('xs')]: {
    price: {
      marginBottom: '2rem',
    },
    container: {
      marginBottom: '2rem',
    },
    text: {
      margin: '2rem 0 ',
    },
  },
}));
export default useStyles;

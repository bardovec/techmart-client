import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  formBody: {
    padding: '2em 1em',
    borderRadius: '.5em',
    border: '2px solid var(--main-text)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formInput: {
    margin: '5px 1em',
    maxWidth: '400px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--main-text)',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--main-text)',
    },
    '& .MuiInputLabel-root': {
      color: 'var(--main-text)',
      '&.Mui-error': {
        color: 'red',
        '&.Mui-focused': {
          color: 'var(--main-text)',
        },
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      borderColor: 'darken(var(--main-text), 20%)',
    },
    '& .MuiFormHelperText-root': {
      marginLeft: '3px',
      fontSize: '.65em',
    },
  },
  submitButton: {
    display: 'block',
    width: 'fit-content',
    margin: '0 auto',
  },
}));

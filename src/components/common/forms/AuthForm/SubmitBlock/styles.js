import { makeStyles } from '@material-ui/core';

export const defaultStyles = {
  wrapper: {
    width: '100%',
    marginTop: '1em',
  },
  button: {
    '&.MuiButton-root': {
      transition: `
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform .3s`,
      background: 'var(--dark-bg-lightened)',
      borderRadius: '7px',
      border: '2px solid var(--main-text)',
      padding: '.5em .7em',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0px 0px 7px 1px var(--main-text)',
      },
    },
    '& .MuiButton-label': {
      color: 'var(--main-text)',
    },
  },
  notification: {
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '0 auto',
    width: 'fit-content',
    padding: '1em',
    textAlign: 'center',
  },
};

export const useStyles = makeStyles(defaultStyles);

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: 'calc(2vw + .5em)',
  },
  title: {
    margin: '0 0 .5em',
  },
  note: {
    margin: '0 0 1em',
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'normal',
    '&::before': {
      content: '"* "',
    },
  },
}));

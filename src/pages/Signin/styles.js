import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    wrapper: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '1em calc(2vw + .5em) 2em',
    },
    title: {
        margin: '0 0 .5em',
        textAlign: 'center',
    },
    link: {
        cursor: 'pointer',
    },
    itemLogin: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

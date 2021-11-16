import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles(() => ({
    cartCounter : {
        position:'absolute',
        fontSize: '12px',
        top: '-11px',
        right: '15px',
        background: 'rgb(62, 192, 221)',
        borderRadius: '50%',
        padding: '1px 5px',
        color: 'white',
    }
}));

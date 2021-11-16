import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    pageTitle: {
        marginTop: '30px',
        textAlign: 'center',
        marginBottom: '50px'
    },
    loadingWrapper: {
        minHeight: '100vh',
    },
    errorText: {
        color: 'red',
    },
}));

export default useStyles;

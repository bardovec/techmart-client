import { makeStyles } from "@material-ui/core";
import { styles } from '../../utils/UserInterfaceConstants';

export const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "28px",
        textTransform: "uppercase",
        margin: 0,
        marginLeft: "5px",
        fontFamily: "Rajdhani",
        color: styles.colorLightBlue,
    },
    shoppingCart: {
        '&:hover': {
            stroke: styles.colorLightBlue
        }
    },
    header: {
        backgroundColor: styles.colorDark,
        padding: "10px",
    },
    search: {
        color: styles.colorBlack,
        height: '40px',
        width: '100%',
        backgroundColor: styles.colorWhite,
        borderRadius: '10px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.colorWhite,
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.colorWhite
        }
    },
    buttonSearch: {
        width: '70px',
        height: '40px',
        background: styles.colorWhite,
        position: 'relative',
        fontSize: '14px',
        marginLeft: '10px',
        borderRadius: '10px',
        border: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.1s ease-in-out',
        '& span': {
            fontWeight: 'semibold',
        },
        color: styles.colorBlack,
        '&:hover': {
            opacity: 0.5,
        },
        '&:active': {
            opacity: 1,
            color: styles.colorLightBlue,
        },
    },
    containerInput: {
        display: 'flex',
        alignItems: 'center',
    },
    [theme.breakpoints.down("sm")]: {
        gridLogo: {
            order: 1,
        },
        gridCart: {
            order: 2,
        },
        gridLogin: {
            order: 3,
        },
        gridInput: {
            order: 4,
        },
        containerInput: {
            paddingLeft: 70,
            paddingRight: 70
        }
    },
    [theme.breakpoints.down("xs")]: {
        containerInput: {
            paddingLeft: 20,
            paddingRight: 0
        }
    },
    linkCoponent: {
        fontSize: "20px",
        textDecoration: "none",
        color: styles.colorLightBlue,
        textTransform: 'none',
        fontWeight: '400'
    },
}));
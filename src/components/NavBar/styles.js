import { makeStyles } from "@material-ui/core";
import { styles } from '../../utils/UserInterfaceConstants';

export const useStyles = makeStyles(() => ({
    linkNavBar: {
        fontSize: "20px",
        textDecoration: "none",
        color: styles.colorLightBlue,
        textTransform: 'none',
        fontWeight: '400'
    },
    NavBar: {
        backgroundColor: styles.colorDarkGrey,
        padding: "10px",
        marginBottom: "20px",
        display: 'flex',
        justifyContent: 'space-around'
    },
    menuItem: {
        color: styles.colorLightBlue,
        textDecoration: "none",
        width: '100%',
        padding: '8px 16px',
        '&:hover': {
            color: styles.colorDark,
        }
    },
    menu: {
        '& .MuiMenu-paper': {
            marginTop: '50px',
            backgroundColor: styles.colorDark,
            borderRadius: '8px',
        },
        '& .MuiMenuItem-gutters': {
            padding: '0px',
            borderRadius: '2px',
            '&:hover': {
                backgroundColor: styles.colorLightBlue,
            }
        }
    },
}));
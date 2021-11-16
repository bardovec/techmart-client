import { makeStyles } from "@material-ui/core";
import { styles } from '../../utils/UserInterfaceConstants';

export const useStyles = makeStyles(() => ({
    text: {
        fontSize: "12px",
        color: styles.colorGrey,
        lineHeight: '3',
    },
    linkWrapper: {
        marginLeft: "15px",
    },
    footerLink: {
        marginTop: "9px",
        fontSize: "14px",
        lineHeight: "19px",
        color: styles.colorGrey,
        display: "block",
    },
    footerTitle: {
        color: styles.colorGrey,
        fontWeight: "bolt",
        fontSize: "18px",
        lineHeight: "25px",
    },
    footer: {
        backgroundColor: styles.colorDark,
        padding: "20px 100px",
    },
    footerFirst: {
        backgroundColor: styles.colorDarkGrey,
        padding: "60px",
    },
    multilineColor: {
        marginTop: "10px",
        height: '40px',
        color: styles.colorGrey,
        borderColor: styles.colorGrey,
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.colorGrey,
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.colorGrey,
        },
        "& .MuiInputLabel-formControl": {
            color: styles.colorGrey,
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.colorGrey,
        },
    },
    hoverInput: {
        '&:hover': {
            borderColor: styles.colorGrey,
        }
    },
    footerEmailInputButton: {
        position: 'absolute',
        top: '22px',
        right: '1px',
    },
    hover: {
        "&:hover": {
            borderColor: styles.colorGrey,
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    }
}));
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  formInput: {
    margin: "10px 0",
    maxWidth: "250px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--main-text)",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--main-text)",
    },
    "& .MuiInputLabel-root": {
      color: "var(--main-text)",
      "&.Mui-error": {
        color: "red",
        "&.Mui-focused": {
          color: "var(--main-text)",
        },
      },
    },
  },
  submitButton: {
    display: 'block',
    width: 'fit-content',
    margin: '0 auto',
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
    alignSelf:'center',
    marginTop:'10px'
  },
  authInput:{
    marginBottom:'20px'
  }
}));

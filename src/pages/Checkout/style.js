import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  checkoutContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap:'wrap'
  },
  checkoutForm: {
    backgroundColor: "white",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "50px 20px",
    marginBottom:'20px'
  },
  formTitle: {
    textAlign: "left",
    marginBottom: "40px",
  },
  formAnchor: {
    display: "flex",
  },
  anchorStyle: {
    fontSize: "11px",
    cursor: "pointer",
    marginRight: "20px",
  },

  btnChekout: {
    color: "rgb(62, 192, 221)",
    background: "white",
    border: "1px solid rgb(62, 192, 221)",
    marginTop: "20px",
    "&:hover": {
      color: "white",
      backgroundColor: "#3ec0dd",
    },
  },
  checkoutItems: {
    backgroundColor: "white",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
    margin: "0 0 20px 0",
    alignSelf: 'baseline'
  },
  tottalPrice: {
    fontSize: "20px",
    fontWeight: "800",
    padding: "0 20px",
  },
}));

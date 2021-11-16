import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  productsFilter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 35px",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: " 5px",
    backgroundColor: "white",
  },
  priceSlider: {
    display: "flex",
    flexDirection: "column",
  },
  textFieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "normal",
    marginTop: "15px",
  },
  productsFilter720: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px 25px",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: " 5px",
  },
  checkBoxAdaptive: {
    fontSize: "10px",
  },
}));

export default useStyles;

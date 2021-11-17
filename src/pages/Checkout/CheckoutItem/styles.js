import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  cartItem: {
    borderRadius: "0",
    padding: "10px 0",
    boxShadow: "0 0 0 0",
  },
  cartMediaWrapper: {
    height: "90px",
    width: "100px",
    backgroundSize: 'contain',
   
  },
  cartTitle: {
    fontSize: "14px",
    fontWeight: "600",
  },
  cartId: {
    fontSize: "12px",
    margin: "10px 0",
  },
  cartPrice: {
    color: "#222222",
    fontWeight: "600",
    fontSize: "12px",
  },
  cartButton: {
    padding: "0",
    minWidth: "30px",
    color: "black",
    textTransform: "none",
  },
  сartContent: {
    padding: " 5px 0 10px 0",
  },
}));

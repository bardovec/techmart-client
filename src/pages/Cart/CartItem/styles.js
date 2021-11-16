import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  cartItem: {
    borderRadius: "0",
    margin: "0 34px",
    padding: "20px 0",
  },
  cartMediaWrapper: {
    height: "130px",
    width: "120px",
    backgroundSize: 'contain',
    marginLeft: '10px',
  },
  cartTitle: {
    fontSize: "15px",
    fontWeight: "600",
  },
  cartId: {
    fontSize: "12px",
    margin: "20px 0",
  },
  cartPrice: {
    color: "#222222",
    fontWeight: "600",
    fontSize: "15px",
  },
  cartButton: {
    padding: "0",
    minWidth: "30px",
    color: "black",
    textTransform: "none",
  },
  сartContent: {
    padding: " 5px 0 10px 30px",
  },
  cartActionTotalDel: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cartTotalPrice: {
    color: "#222222",
    fontWeight: "600",
    fontSize: "18px",
  },

  cartButtonDel: {
    padding: "0",
  },
  cartQty: {
    display: "flex",
    justifyContent: "space-around",
  },
  maxQty: {
    color: 'red',
    fontSize: '8px'
}
}));

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  cardWrapper: {
    width: "242px",
    marginBottom: "25px",
    marginLeft: "25px",
  },
  cardAdaptiveWrapper: {
    width: "200px",
    margin: " 0 10px 25px 20px ",
  },
  cardMediaWrapper: {
    height: "180px",
    width: "133px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "25px",
    backgroundSize: "contain",
  },
  cardTitle: {
    color: "#222222",
    marginTop: "20px",
    fontSize: "14px",
    lineHeight: "19px",
  },
  cardLink: {
    textDecoration: "none",
  },
  cardPrice: {
    color: "#222222",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    marginTop: "28px",
  },
  cardExtraOptions: {
    marginTop: "5px",
  },
  cardButton: {
    width: "100%",
    color: "white",
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "600",
    color: "#3ec0dd",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid  #3ec0dd",
    "&:hover": {
      color: "white",
      backgroundColor: "#3ec0dd",
    },
  },
}));

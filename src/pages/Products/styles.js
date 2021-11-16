import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  productsMainWrapper: {
    display: "flex",
  },
  productsItemMainWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  producstAdaptive: {
    justifyContent: "space-evenly",
  },
  menuStyle: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
}));

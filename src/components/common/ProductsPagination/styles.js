import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  paginationListItem: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  paginationStyle: {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
  },
}));

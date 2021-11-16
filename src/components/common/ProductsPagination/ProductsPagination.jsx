import React from "react";
import Pagination from "@mui/material/Pagination";
import { useStyles } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const PaginationControlled = ({ perPage, page, setPage, filteredArr }) => {
  const classes = useStyles();
  const is768 = useMediaQuery("(max-width: 768px)");

  const count = Math.ceil(filteredArr.length / perPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.paginationStyle}>
      <Pagination
        className={classes.paginationStyle}
        defaultPage={page}
        count={count}
        color="primary"
        shape="rounded"
        size={is768 ? "small" : "large"}
        onChange={handleChange}
      />
    </div>
  );
};
export default PaginationControlled;

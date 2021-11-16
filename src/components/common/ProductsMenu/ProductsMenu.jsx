import React from "react";

import Button from "@mui/material/Button";
import StyledMenu from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  sortByAscending,
  sortByDescending,
} from "../../../redux/actions/productActions";

const NestedList = ({ productsList, setSortedList }) => {
  const is620 = useMediaQuery("(max-width: 620px)");
  const [event, setEvent] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSortByAscending = () => {
    setAnchorEl(null);
    const sort = sortByAscending(productsList);
    setSortedList(sort);
  };
  const handleSortByDescending = () => {
    setAnchorEl(null);
    const sort = sortByDescending(productsList);
    setSortedList(sort);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setEvent(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEvent(false);
  };

  return (
    <div>
      <Button
        style={is620 ? { fontSize: "10px" } : null}
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleOpen}
        size={is620 ? "small" : "medium"}
      >
        Сортировать по :
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSortByDescending} disableRipple>
          по возрастанию
        </MenuItem>
        <MenuItem onClick={handleSortByAscending} disableRipple>
          по убыванию
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
export default NestedList;

import React, { useState } from "react";
import { Slide, Dialog, Button, useMediaQuery } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popupfilter = ({ children }) => {
  const [open, setOpen] = useState(false);

  const is620 = useMediaQuery("(max-width: 620px)");

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        style={is620 ? { fontSize: "10px" } : null}
        size={is620 ? "small" : "medium"}
      >
        Фильтр
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        scroll="body"
      >
        {children}
      </Dialog>
    </div>
  );
};

export default Popupfilter;

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box 
    display="flex"
    flexDirection="column" 
    alignItems="center">
      <CircularProgress />
      <p>Loading...</p>
    </Box>
  );
};
export default Loader;

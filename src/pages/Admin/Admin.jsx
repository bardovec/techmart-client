import React from 'react';
import { Box, Container } from '@material-ui/core';
import CreateDevice from '../../components/Modal/CreateDevice';

const Admin = () => (
  <Container>
    <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CreateDevice />
    </Box>
  </Container>
);

export default Admin;

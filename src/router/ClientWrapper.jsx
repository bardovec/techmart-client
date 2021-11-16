import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/Footer';

const ClientWrapper = ({ children }) => (
  <div>
    <Header />
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default ClientWrapper;

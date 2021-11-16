import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';

import UserService from '../services/UserService';

const AdminWrapper = ({ children }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(undefined);

  useEffect(async () => {
    const response = await UserService.ping();
    console.log(response)
    setIsUserAdmin(!!((response.status === 200 && response.data.isAdmin)));
  }, []);

  if (isUserAdmin === true) {
    return (
      <div>
        {children}
      </div>
    );
  }
  if (isUserAdmin === false) {
    return <Redirect to='/signin' />;
  }

  return (<p>LOADING</p>);
};

export default AdminWrapper;

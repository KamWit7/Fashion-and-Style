import { Center } from '@components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SignIn = () => {
  return (
    <Center>
      <div className="flex">
        <img className="flex-1 bg-red-100" src="" alt="ha women sluup, hahaha slup" />
        <div className="flex-1 bg-blue-100">
          <Outlet />
        </div>
      </div>
    </Center>
  );
};

export default SignIn;

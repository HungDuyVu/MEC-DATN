import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/home/Header';
import TaskMenu from '../components/home/TaskMenu';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
   const { user, token } = useSelector((state) => state.auth);
   const location = useLocation();
   console.log("token: ", token);


   return (
      <div className="flex flex-col h-screen">
         <Header user={user} className="flex-none p-4" />

         <div className="flex flex-1 overflow-hidden">
            <TaskMenu className="w-1/4 bg-gray-100 p-4 overflow-y-auto" role={user.role} />
            <div className="flex-1 p-6 overflow-y-auto">
               {location.pathname === '/home' ? (
                  <div className="flex items-center uppercase justify-center h-full text-4xl text-pastelPink bg-darkPurple p-6 rounded-md">
                     Chào mừng làm việc tại cửa hàng thời trang HPL
                  </div>
               ) : (
                  <Outlet />
               )}
            </div>
         </div>
      </div>
   );
};

export default Layout;
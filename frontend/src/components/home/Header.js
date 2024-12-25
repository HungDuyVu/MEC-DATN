import React, { useState, useEffect } from 'react';
import { AiFillBank } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
   const [position, setPosition] = useState("");

   const handleUserPosition = (user) => {
      if (!user || !user.role) {
         return "Nhân viên";
      }
      switch (user.role) {
         case "manager":
            return "Quản lý";
         case "sales_staff":
            return "Nhân viên bán hàng";
         case "warehouse_staff":
            return "Nhân viên kho";
         default:
            return "Nhân viên";
      }
   };

   useEffect(() => {
      const pos = handleUserPosition(user);
      setPosition(pos);
   }, [user]);

   return (
      <div className='bg-darkPurple flex justify-between items-center p-6'>
         <div className='flex items-center space-x-2'>
            <AiFillBank className='text-sunsetOrange text-3xl' />
            <Link to="/home" className='text-sunsetOrange text-2xl hover:text-pastelPink'>Trang chủ</Link>
         </div>
         {/* <div>
            <h1 className='text-pastelPink text-2xl'>Trang web quản lý bán hàng</h1>
         </div> */}
         <div className='text-roseRed text-2xl'>
            <span>{position}: </span>
            <span>{user?.username}</span>
         </div>
      </div>
   );
};

export default Header;

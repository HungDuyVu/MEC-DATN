import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { taskMenuManager, taskMenuSalesStaff, taskMenuWarehouseStaff } from "../../config";
import { CiLogout } from "react-icons/ci"; // Import biểu tượng logout
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/auth';


const TaskMenu = ({ role }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate(); // Để chuyển hướng sau khi logout

   const taskMenu = {
      manager: taskMenuManager,
      sales_staff: taskMenuSalesStaff,
      warehouse_staff: taskMenuWarehouseStaff,
   }[role] || [];

   if (taskMenu.length === 0) {
      return <div className="p-4 text-roseRed">Không có quyền truy cập menu</div>;
   }
   console.log("taskmenu: ", taskMenu);


   const handleLogout = () => {
      dispatch(logoutUser())
         .then(() => {
            navigate('/');
         })
         .catch((err) => {
            console.error("Logout failed: ", err);
         });
   };

   return (
      <div className="flex flex-col gap-4 bg-deepBlue p-4">
         {taskMenu.map((item) => (
            <NavLink
               key={item.name}
               to={item.to}
               className={({ isActive }) =>
                  `flex items-center gap-2 p-3 rounded-md ${isActive ? 'bg-royalPurple text-white' : 'hover:bg-roseRed text-white'}`}
            >
               {item.icon}
               <span>{item.label}</span>
            </NavLink>
         ))}


         <div
            className="flex items-center gap-2 p-3 rounded-md cursor-pointer hover:bg-roseRed text-white"
            onClick={handleLogout}  // Gọi hàm handleLogout khi người dùng click vào logout
         >
            <CiLogout className="text-xl" />
            <span>Đăng xuất</span>
         </div>
      </div>
   );
};

export default TaskMenu;

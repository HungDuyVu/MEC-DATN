import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from '../helpers/ui/Button';


const initialState = {
   username: "",
   password: ""
};

const Login = () => {
   const [formData, setFormData] = useState(initialState);
   const [message, setMessage] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isAuthenticated, error } = useSelector((state) => state.auth);

   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser(formData));
   };

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   useEffect(() => {
      if (isAuthenticated) {
         setMessage("Đăng nhập thành công!");
         navigate('/home');
      } else if (error) {
         setMessage(`Lỗi: ${error}`);
      }
   }, [isAuthenticated, error, navigate]);

   return (
      <div className='h-screen flex justify-center items-center bg-deepBlue'>
         <form onSubmit={handleSubmit} className="p-8 shadow-lg rounded-md w-full max-w-md bg-white">
            <h2 className="text-center text-2xl font-semibold text-royalPurple mb-6">Đăng Nhập</h2>
            <div className="mb-6">
               <label className="block text-royalPurple font-medium mb-2">Tên đăng nhập</label>
               <input
                  type="text"
                  name="username"
                  value={formData.username}
                  required
                  onChange={handleOnChange}
                  className="w-full border border-royalPurple rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-royalPurple"
               />
            </div>
            <div className="mb-6 relative">
               <label className="block text-royalPurple font-medium mb-2">Mật khẩu</label>
               <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  required
                  onChange={handleOnChange}
                  className="w-full border border-royalPurple rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-royalPurple pr-10" // Đặt padding phải để tạo không gian cho icon
               />
               <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2/3 transform -translate-y-1/2 text-royalPurple" // Đưa icon vào giữa input
               >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
               </button>
            </div>
            <Button
               type="submit"
               variant="primary"
               className="mb-4"
               onClick={handleSubmit}
               disabled={false} // Có thể cấu hình lại tùy theo trạng thái
            >
               Đăng nhập
            </Button>
            {message && <p className="mt-4 text-center text-roseRed">{message}</p>}
         </form>
      </div>
   );
};

export default Login;

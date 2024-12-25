import React from 'react';

const Button = ({ variant = "primary", type = "button", className = "", disabled = false, onClick, children }) => {
   // Định nghĩa các kiểu nút với màu sắc tùy chỉnh
   const buttonStyles = {
      primary: "bg-roseRed text-white hover:bg-royalPurple focus:ring-2 focus:ring-royalPurple disabled:bg-gray-300",
      secondary: "bg-gray-100 text-darkPurple hover:bg-main focus:ring-2 focus:ring-royalPurple disabled:bg-gray-300",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-roseRed disabled:bg-gray-300",
      success: "bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-600 disabled:bg-gray-300",
      outline: "border-2 border-royalPurple text-royalPurple hover:bg-royalPurple hover:text-white focus:ring-2 focus:ring-royalPurple disabled:bg-gray-300"
   };

   return (
      <button
         type={type}
         disabled={disabled}
         onClick={onClick}
         className={`${buttonStyles[variant]} w-full py-2 px-4 rounded-md focus:outline-none transition duration-300 ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;

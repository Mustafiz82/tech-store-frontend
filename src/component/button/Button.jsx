import React from "react";

const Button = ({ text, onClick }) => {
  return (
   <div>
     <button
      onClick={onClick}
      className="bg-blue-500 text-white px-5 py-2 rounded-4xl hover:bg-blue-600"
    >
      {text}
    </button>
    {/* <button  onClick={onClick}  className="border-2 border-blue-600 text-blue-600">{text}</button> */}
   </div>
  );
};

export default Button;
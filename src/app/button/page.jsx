import React from 'react';
 import Button from '@/component/button/Button';
const page = () => {
     const handleClick = () => {
    alert("Button Clicked!");
  };
    return (
         <div className="p-10">
      <h1 className="text-2xl mb-4">My Page</h1>

      <Button text="Click Me" onClick={handleClick} />

      <br /><br />

      <Button text="Another Button" onClick={() => alert("Second button")} />
    </div>
    );
};

export default page;
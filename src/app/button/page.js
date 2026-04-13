
'use client'
import Button from "@/component/button/Button";

export default function Page() {
  const handleClick = () => {
    alert("Clicked!");
  };

  return (
    <div className="p-10">
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}
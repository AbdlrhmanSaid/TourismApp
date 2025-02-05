import React from "react";

const Spinner = () => {
  return (
    <div className="relative h-screen translate-x-[50%] left-[-50%] inset-0 grid place-items-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
    </div>
  );
};

export default Spinner;

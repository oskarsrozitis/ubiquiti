/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import { useNavigate } from "react-router-dom";
import ChevLeft from "@icons/chevLeft.svg?react";

const SingleProductNav: React.FC<SingleProductNavProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center p-4 border-b">
      <button
        onClick={() => navigate("/")}
        className="text-lg p-3 transition-all  hover:bg-gray-100 rounded"
      >
        <ChevLeft />
      </button>
      <div className="justify-center flex w-full">
        <h1 className="text-xl ms-auto me-auto text-gray-500">{title}</h1>
      </div>
    </div>
  );
};

export default SingleProductNav;

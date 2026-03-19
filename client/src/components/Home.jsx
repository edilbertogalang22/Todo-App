import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full font-bold gap-3">
      <h1 className="text-2xl">Hello From Home Page</h1>
      <button
        onClick={() => navigate("/todolist")}
        className="bg-gray-500 hover:bg-blue-600 transition text-white rounded-2xl py-2 px-6 cursor-pointer"
      >
        Start Now!
        
      </button>
    </div>
  );
};

export default Home;

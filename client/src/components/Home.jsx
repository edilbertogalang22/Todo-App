import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full font-bold gap-3 bg-linear-to-bl from-blue-600 to-indigo-300">
      <div className="flex flex-col items-center justify-center gap-3 bg-gray-200 p-8 rounded-2xl">
        <h1 className="text-4xl mb-4 text-center">Welcome to Todo List</h1>
        <h1 className="text-2xl text-center">Simple Todo App</h1>
        <button
          onClick={() => navigate("/todolist")}
          className="bg-gray-500 hover:bg-blue-600 transition text-white rounded-2xl py-2 px-6 cursor-pointer"
        >
          Start Now!
        </button>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Routes, Route } from "react-router-dom";

/* Components */
import Home from "./components/Home";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/todolist" element={<TodoList />} />
    </Routes>
  );
};

export default App;

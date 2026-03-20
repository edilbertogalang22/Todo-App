import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // array ng todo items
  const [inputValue, setInputValue] = useState(""); // current input value

  // declare message
  const [showaddmessage, setShowMessage] = useState(false);
  const [showeditmessage, setShowEditMessage] = useState(false);
  const [showdeletemessage, setShowDeleteMessage] = useState(false);

  // add new tasks
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue(""); // clear input

      //show sucessful created message success
      setShowMessage(true);

      // hide message after 1s
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  };

  // delete task by index
  const handleDeleteTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);

    //show successfully delete message
    setShowDeleteMessage(true);

    // hide message after 1s
    setTimeout(() => {
      setShowDeleteMessage(false);
    }, 1000);
  };

  // Optional: Edit task (simplified)
  const handleEditTask = (index) => {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask.trim();
      setTasks(updatedTasks);

      // showed successfully edit message
      setShowEditMessage(true);

      // hide message after 1s
      setTimeout(() => {
        setShowEditMessage(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-linear-to-bl from-blue-100 to-indigo-300 flex flex-col w-full h-screen items-center justify-center gap-2">
      <h1 className="text-2xl font-semibold mb-3">Welcome to my TodoList !</h1>
      {showaddmessage && (
        <h5 className="bg-green-500 text-white rounded-2xl px-10 py-1">
          Todo item Created Successfully!
        </h5>
      )}
      {showeditmessage && (
        <h5 className="bg-blue-500 text-white rounded-2xl px-10 py-1">
          Todo item Sucessfully Updated!
        </h5>
      )}
      {showdeletemessage && (
        <h5 className="bg-red-500 text-white rounded-2xl px-10 py-1">
          Todo item Sucessfully Deleted!
        </h5>
      )}
      <div className="flex items-center justify-between gap-1 border shadow-md p-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask}
          className="border rounded-4xl py-2 px-6 text-center"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={handleAddTask}
          className=" bg-blue-500 border rounded-4xl py-3 px-5 cursor-pointer hover:bg-green-500 transition text-white"
        >
          +
        </button>
      </div>
      {/* Displaying TodoList */}
      <div className="flex flex-col gap-2 w-full max-w-md rounded-lg border shadow-2xl p-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full border rounded-2xl p-2"
          >
            <input
              type="text"
              value={task}
              readOnly
              className="flex-1 border rounded-2xl px-3 py-1"
            />
            <button className="p-2" onClick={() => handleEditTask(index)}>
              <PencilIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
            </button>
            <button className="p-2" onClick={() => handleDeleteTask(index)}>
              <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

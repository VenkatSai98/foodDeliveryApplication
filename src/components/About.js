import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../utils/todoList";
import DragAndDrop from "./DragAndDrop";


const About = () => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch()
  // const [todoList, setTodoList] = useState([]);
  const handleAdd = () => {
    // setTodoList([...todoList, inputValue]); // initially todoList has empty value and inputValue is added into array like, [inputValue]
    setInputValue("");
    dispatch(addList(inputValue)) 
  };
  // const handleRemove = () => {
  //   setTodoList([]);
  // };
  return (
    <div className="text-center">
      <h1 className="font-medium font-serif text-5xl my-8">
        This is about page
      </h1>
      <h3 className="text-2xl font-bold mb-4">To Do List</h3>
      <input
        type="text"
        className="border border-gray-600 focus:outline-none rounded p-1 mx-1"
        name="todoList"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="border border-gray-800 rounded bg-stone-100 py-1 px-3 mx-1"
        onClick={handleAdd}
      >
        ADD
      </button>
      {/* <ul>
        {todoList.map((item, index) => (
          <div className="flex justify-center">
            <li className="mt-6 mr-52 font-medium" key={index}>
              {item}
            </li>
            <button
              className="mt-6 font-medium"
              key={index}
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        ))}
      </ul> */}
      <DragAndDrop />
    </div>
  );
};

export default About;

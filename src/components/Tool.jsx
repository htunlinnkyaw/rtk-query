import { useState } from "react";
import { usePostTodoMutation } from "../store/services/endpoints/todo.endpoints";

const Tool = ({ handleRefatch }) => {
  const [fun, data] = usePostTodoMutation();
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun({
      text: todo,
    });
    handleRefatch();
  };

  console.log(data);

  return (
    <div className="space-y-2">
      <h1>RTK Todo List</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={todo}
          onChange={handleInput}
          type="text"
          className="border w-[400px] border-black px-2 py-1 outline-none"
        />
        <button className="border border-black text-white bg-black rounded-sm px-2 py-1">
          Add
        </button>
      </form>
    </div>
  );
};

export default Tool;

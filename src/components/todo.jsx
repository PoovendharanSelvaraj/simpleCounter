import { useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    setTodos([...todos, { id: Date.now(), value: todo }]);
    setTodo("");
  };
  // const onDelete=(todos.id)=>{
  //   let newtodo = todos.filter((todo)=>{

  //   });
  //    setTodos(newTodo)
  // }

  return (
    <div>
      <p>Todo:</p>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="Enter string"
      />
      <button onClick={handleClick}>Add</button>
      {todos.map((tod) => {
        return (
          <div>
            <input type="checkbox" />
            {tod.value}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

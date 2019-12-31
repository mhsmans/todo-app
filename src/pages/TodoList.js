import React from "react";

import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

const useGlobalState = () => React.useContext(window.GlobalState);

function TodoList() {
  const { todos } = useGlobalState();
  const todoItems = todos.map(element => (
    <TodoItem key={element.id} todoItem={element} />
  ));

  return (
    <React.Fragment>
      <AddTodo />
      <div style={listStyle}>{todoItems}</div>
    </React.Fragment>
  );
}

const listStyle = {
  padding: "20px",
  backgroundColor: "#f5f5f5",
  overflow: "auto",
  maxHeight: "75vh"
};

export default TodoList;

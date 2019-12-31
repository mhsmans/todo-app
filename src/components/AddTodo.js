import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

const useGlobalState = () => React.useContext(window.GlobalState);

function AddTodo() {
  const { todos, idCount } = useGlobalState();
  const [text, setText] = useState("");

  function onTextChange(e) {
    setText(e.target.value);
  }

  function createTodo(event) {
    event.preventDefault();

    let todo = {
      id: idCount,
      title: text,
      completed: false
    };

    if (text !== "") {
      window.GlobalState.set(todos.push(todo));
      window.GlobalState.set({ idCount: idCount + 1 });
      setText("");
    }
  }

  return (
    <form onSubmit={createTodo}>
      <div style={{ display: "flex" }}>
        <TextField
          variant="standard"
          label="Enter Todo"
          fullWidth={true}
          style={inputStyle}
          value={text}
          onChange={onTextChange}
        />
        <Button
          disableElevation={true}
          variant="contained"
          color="secondary"
          style={buttonStyle}
          onClick={createTodo}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

const inputStyle = {
  borderRadius: 0,
  backgroundColor: "#ffffff"
};

const buttonStyle = {
  width: "20%",
  height: "48px",
  borderRadius: 0
};

export default AddTodo;

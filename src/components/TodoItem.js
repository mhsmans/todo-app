import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  TextField
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const useGlobalState = () => React.useContext(window.GlobalState);

function TodoItem(props) {
  const { todos } = useGlobalState();
  const [editMode, setEditMode] = React.useState(false);

  function getTodo() {
    let todo = todos.find(item => item.id === props.todoItem.id);
    return todo;
  }

  function getTodoIndex(todo) {
    let index = todos.indexOf(todo);
    return index;
  }

  function toggleComplete() {
    let todo = getTodo();

    if (todo.completed) {
      window.GlobalState.set((todos[getTodoIndex(todo)].completed = false));
    } else {
      window.GlobalState.set((todos[getTodoIndex(todo)].completed = true));
    }
  }

  function deleteTodo() {
    let todo = getTodo();
    window.GlobalState.set(todos.splice(getTodoIndex(todo), 1));
  }

  function toggleEditMode() {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }

  function handleTextChange(e) {
    let todo = getTodo();
    window.GlobalState.set((todos[getTodoIndex(todo)].title = e.target.value));
  }

  return (
    <Card style={todoStyle}>
      <Checkbox
        style={{ padding: "12px" }}
        checked={props.todoItem.completed}
        onClick={toggleComplete}
      />
      <CardContent style={{ padding: 0, minWidth: 0 }}>
        {!editMode ? (
          <Typography variant="body1" style={textStyle}>
            {props.todoItem.title}
          </Typography>
        ) : (
          <TextField
            variant="standard"
            fullWidth={true}
            value={props.todoItem.title}
            size="small"
            style={textFieldStyle}
            onChange={handleTextChange}
          />
        )}
      </CardContent>
      <div style={{ position: "absolute", right: 0, display: "flex" }}>
        <IconButton aria-label="edit" onClick={toggleEditMode}>
          <EditOutlinedIcon color={editMode ? "secondary" : "action"} />
        </IconButton>
        <IconButton aria-label="delete" onClick={deleteTodo}>
          <DeleteOutlineOutlinedIcon color="action" />
        </IconButton>
      </div>
    </Card>
  );
}

const todoStyle = {
  marginBottom: "5px",
  display: "flex",
  flexWrap: "nowrap",
  position: "relative"
};

const textStyle = {
  lineHeight: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const textFieldStyle = {
  height: "fit-content",
  paddingTop: "8px"
};

export default TodoItem;

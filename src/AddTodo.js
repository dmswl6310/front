import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem;

  const onButtonClick = () => {
    addItem(item);
    setItem({ title: "" });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key == "Enter") {
      onButtonClick();
    }
  };

  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };

  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          value={item.title}
          onKeyPress={enterKeyEventHandler}
        />
      </Grid>
      <Grid>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;

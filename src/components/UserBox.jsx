import React from "react";

import Button from "./Button";

export default function UserBox({ age, name, onRemove }) {
  return (
    <div style={user_style}>
      <div>{age + "-" + name}</div>
      <Button onClick={onRemove}>x</Button>
    </div>
  );
}

const user_style = {
  width: "100px",
  height: "100px",
  border: "1px solid green",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

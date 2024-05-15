import React from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "#42932d",
  color: "white",
};

function Box2() {
  console.log("Box2 is rendering");
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);

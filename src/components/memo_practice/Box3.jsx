import React from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "#c491b2",
  color: "white",
};

function Box3() {
  console.log("Box3 is rendering");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);

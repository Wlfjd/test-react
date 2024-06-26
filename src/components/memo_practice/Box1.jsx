import React from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "#01c49f",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1 is rendering");
  return (
    <div style={style}>
      <button onClick={initCount}>초기화</button>
    </div>
  );
}

export default React.memo(Box1);

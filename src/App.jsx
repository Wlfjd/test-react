import React, { useState } from "react";

import Box1 from "components/memo_practice/Box1";
import Box2 from "components/memo_practice/Box2";
import Box3 from "components/memo_practice/Box3";
import Layout from "Layout";

export default function App() {
  console.log("App is rendering");
  const [count, setCount] = useState(0);

  const onPlusButtonClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount((prev) => prev - 1);
  };

  const initCount = () => {
    setCount(0);
  };

  return (
    <Layout>
      <h3>카운트 예제입니다!</h3>
      <p>현재 카운트:{count}</p>
      <div>
        <button onClick={onPlusButtonClickHandler}>+</button>
        <button onClick={onMinusButtonClickHandler}>-</button>
      </div>
      <div style={{ display: "flex", paddingTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </Layout>
  );
}

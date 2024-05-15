```jsx
import React from "react";

import styled from "styled-components";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  //백틱 내에서 js 사용하기 위해서는 이렇게 사용해야한다
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const StContainer = styled.div`
  display: flex;
`;

//박스의 색
const BOX_LIST = ["red", "blue", "green", "purple"];

//색을 넣으면, 이름을 반환하는 함수
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간박스";
    case "green":
      return "초록박스";
    case "yellow":
      return "노란박스";
    default:
      return "검정박스";
  }
};

export default function App() {
  return (
    <StContainer>
      {BOX_LIST.map((box) => {
        return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
      })}
    </StContainer>
  );
}
```

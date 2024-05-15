import React, { useContext } from "react";

import { FamilyContext } from "context/FamilyContext";

export default function Child() {
  const style = {
    color: "red",
    fontWeight: "900",
  };

  const data = useContext(FamilyContext);

  return (
    <div>
      우리집은
      <span style={style}>{data.houseName}</span> 이고 용돈은
      <span style={style}> {data.pocketMoney}</span> 에요
    </div>
  );
}

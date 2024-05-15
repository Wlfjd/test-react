```jsx
import React, { useState } from "react";

import Layout from "Layout";

export default function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onClickHandler = (id, pw) => {
    alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다. `);
  };

  return (
    <Layout>
      <div>
        이름 :
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        비밀번호 :
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          onClickHandler(id, pw);
          setId("");
          setPw("");
        }}
      >
        로그인
      </button>
    </Layout>
  );
}
```

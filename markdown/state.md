```jsx
import React, { useState } from "react";

import Layout from "Layout";

export default function App() {
  const [obj, setObj] = useState({
    name: "ww",
    age: 21,
  });

  return (
    <Layout>
      <div>{obj.name}</div>
      <button
        onClick={() => {
          const copy = { ...obj };
          copy.name = "pp";
          setObj(copy);
        }}
      >
        클릭
      </button>
    </Layout>
  );
}
```

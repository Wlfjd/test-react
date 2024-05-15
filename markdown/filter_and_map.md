```jsx
import React from "react";

import Layout from "Layout";

export default function App() {
  const ARR = ["감자", "고구마", "오이", "가지", "옥수수"];

  const FILTER_ARR = ARR.filter((item) => item !== "오이");
  return (
    <Layout>
      <div style={{ display: "flex", gap: "10px" }}>
        {FILTER_ARR.map((item) => (
          <Box title={item} />
        ))}
      </div>
    </Layout>
  );
}

function Box({ title }) {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        border: "1px solid green",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {title}
    </div>
  );
}
```

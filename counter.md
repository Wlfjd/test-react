import React, { useState } from "react";

import Layout from "Layout";

export default function App() {
const [count, setCount] = useState(0);

const plusButtonClickHandler = () => {
setCount((prev) => prev + 1);
};

const minusButtonClickHandler = () => {
setCount((prev) => prev - 1);
};

return (
<Layout>
{count}
<div>
<button onClick={plusButtonClickHandler}>+1</button>
<button onClick={minusButtonClickHandler}>-1</button>
</div>
</Layout>
);
}

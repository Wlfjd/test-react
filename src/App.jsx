import React, { useState } from "react";

import Layout from "Layout";

const USERS = [
  {
    id: 1,
    age: 30,
    name: "송종기",
  },
  {
    id: 2,
    age: 24,
    name: "송강",
  },
  {
    id: 3,
    age: 25,
    name: "김유정",
  },
  {
    id: 4,
    age: 26,
    name: "구교환",
  },
];

export default function App() {
  const [users, setUsers] = useState(USERS);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addButtonHandler = () => {
    const newUser = { id: users.length + 1, age, name };
    setUsers((prev) => [...prev, newUser]);
  };

  const removeButtonHandler = (id) => {
    //  const newUsers = users.filter((item) => id !== item.id);
    setUsers((prev) => prev.filter((item) => id !== item.id));
  };

  return (
    <Layout>
      <div style={{ margin: "20px 0" }}>
        이름 : <input value={name} onChange={(e) => nameChangeHandler(e)} />
        <br />
        나이 : <input value={age} onChange={ageChangeHandler} />
        <br />
        <button onClick={addButtonHandler}>추가</button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {users.map((item) => (
          <UserBox
            key={item.id}
            age={item.age}
            name={item.name}
            removeButtonHandler={() => removeButtonHandler(item.id)}
          />
        ))}
      </div>
    </Layout>
  );
}

function UserBox({ id, age, name, removeButtonHandler }) {
  return (
    <div style={user_style}>
      <div>{age + "-" + name}</div>
      <button onClick={removeButtonHandler}>x</button>
    </div>
  );
}

const user_style = {
  width: "100px",
  height: "100px",
  border: "1px solid green",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

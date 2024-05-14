import React, { useState } from "react";

import Button from "components/Button";
import Input from "components/Input";
import UserBox from "components/UserBox";
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
    const newUser = users.filter((item) => id !== item.id);
    setUsers(newUser);
  };

  return (
    <Layout>
      <div style={{ margin: "20px 0" }}>
        <Input
          label="이름"
          value={name}
          onChange={(e) => nameChangeHandler(e)}
        />
        <Input label="나이" value={age} onChange={(e) => ageChangeHandler(e)} />
        <Button onClick={addButtonHandler}>추가</Button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {users.map((item) => (
          <UserBox
            key={item.id}
            age={item.age}
            name={item.name}
            onRemove={() => removeButtonHandler(item.id)}
          />
        ))}
      </div>
    </Layout>
  );
}

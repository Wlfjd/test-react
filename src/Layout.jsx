import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header style={{ margin: "10px", border: "1px solid red" }}>헤더</header>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </>
  );
}

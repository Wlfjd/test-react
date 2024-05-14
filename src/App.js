import "App.css";

function App() {
  const onClickHandler = () => {
    alert("click");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "yellow",
      }}
    >
      I made this component
      <button onClick={onClickHandler}>click</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Main() {
  const [input, setInput] = useState();
  const [task, setTask] = useState([]);

  function addTask() {
    if (!input) {
      alert("Adicione algo no input");
      return;
    }

    const infoInput = {
      value: input,
      id: Math.random(),
    };

    setTask([...task, infoInput]);
    setInput("");
  }

  return (
    <>
      <p>About</p>
      <p>SUBSCRIBE</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          onClick={() => {
            addTask();
          }}
        >
          Adicionar
        </button>
      </form>
    </>
  );
}

export default Main;

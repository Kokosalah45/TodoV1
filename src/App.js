import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Naive Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
      <Header text={"Todos"} />
      <Todo />
    </div>
  );
}

export default App;

import React from "react";

import Header from "./components/header/header";
import Card from "./components/card/card";

import data from "./database/data";

import "./reset.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="title">
          <h1>React.js Demo</h1>
          <h2>Todo App!</h2>
        </div>
        <div className="main">
          <div className="todo-list">
            {this.state.todos.map(todo => (
              <Card
                title={todo.title}
                description={todo.description}
                image={todo.image}
                onClick={title =>
                  this.setState({
                    todos: this.state.todos.filter(todo => todo.title !== title)
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

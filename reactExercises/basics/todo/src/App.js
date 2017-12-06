import React, { Component } from 'react';
import './App.css';
import CreateTodo from './create-todo';
import TodoList from './todo-list';

const todos = [
  { 
    task: 'make react tutorial',
    isComplete: false
  },
  {
    task: 'make dinner',
    isComplete: false,
  },
  {
    task: 'walk dog',
    isComplete: true,
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
    };
  }

  render() {
    return (
      <div className="App">
       <h1>React Todo App</h1>
        <CreateTodo />
       <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

import {isEnabled} from './lib/feature';
import React, { Component } from 'react';
import TodoInput from './components/input.js';
import TodosList from './components/todoslist.js';
import Filters from './components/filters.js'
import {todos} from './state';
import {addTodo, toggleTodoState} from './actions';
import Header from './components/header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {renderBottom:isEnabled('renderBottom'), filter: 'showall', todos: todos.getState().todos};
    this.addTodo = this.addTodo.bind(this);
    this.toogleTodo = this.toogleTodo.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  addTodo(text) {
    todos.dispatch(addTodo(text));
    localStorage.setItem("todos", JSON.stringify(todos.getState()))
  }

  toogleTodo(id) {
    todos.dispatch(toggleTodoState(id));
    localStorage.setItem("todos", JSON.stringify(todos.getState()))
    this.setState({todos: todos.getState().todos})
  }


  handleAdd(text) {
    todos.dispatch(addTodo(text));
    localStorage.setItem("todos", JSON.stringify(todos.getState()))
    this.setState({todos: todos.getState().todos})
  }

  handleFilterChange(value) {
    this.setState({filter: value});
  }

  render() {
    var filter = "";
    if (enableFilter) {
        filter = <Filters onFilterChange={this.handleFilterChange} />
    }

    if (this.state.renderBottom) {
      return (
        <div className="container">
          <Header />
          <TodosList todos ={this.state.todos} toogleTodo={this.toogleTodo}/>
          <TodoInput onAdd={this.handleAdd} />
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <Header />
          <TodoInput onAdd={this.handleAdd} />
          {filter}
          <TodosList todos = {this.state.todos} toogleTodo={this.toogleTodo} filter={this.state.filter}/>
        </div>
      )
    }
  }
}

export default App;

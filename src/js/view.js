import {isEnabled} from './lib/feature';
import React, { Component } from 'react';
import TodoInput from './components/input.js';
import TodosList from './components/todoslist.js';
import Filters from './components/filters.js'
import {todos} from './state';
import {addTodo, toggleTodoState} from './actions';
import Header from './components/header.js';
import ModalError from './components/modalerror.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, renderBottom: isEnabled('renderBottom'), filterTop: isEnabled('filterTop'), filter: 'showall', todos: todos.getState().todos};
    this.addTodo = this.addTodo.bind(this);
    this.toogleTodo = this.toogleTodo.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
    if (text === '') {
      this.setState({showModal: true})
    } else {
      todos.dispatch(addTodo(text));
      localStorage.setItem("todos", JSON.stringify(todos.getState()))
      this.setState({todos: todos.getState().todos})
    }
  }

  handleFilterChange(value) {
    this.setState({filter: value});
  }


  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    var filter = "";
    if (enableFilter) {
        filter = <Filters onFilterChange={this.handleFilterChange} />
    }


    if (this.state.renderBottom && this.state.filterTop) {
      return (
        <div className="container">
          <Header />
          <ModalError showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
          {filter}
          <div className="spacer10"></div>
          <h2>My ToDo(s)</h2>
          <TodosList todos = {this.state.todos} toogleTodo={this.toogleTodo} filter={this.state.filter}/>
          <TodoInput onAdd={this.handleAdd} />
        </div>
      )
    }
    if (this.state.renderBottom) {
      return (
        <div className="container">
          <ModalError showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
          <Header />
          <h2>My ToDo(s)</h2>
          <div className="spacer10"></div>
          <TodosList todos = {this.state.todos} toogleTodo={this.toogleTodo} filter={this.state.filter}/>
          <TodoInput onAdd={this.handleAdd} />
          {filter}
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <ModalError showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />

          <Header />
          <TodoInput onAdd={this.handleAdd} />
          {filter}
          <h2>My ToDo(s)</h2>
          <div className="spacer10"></div>
          <TodosList todos = {this.state.todos} toogleTodo={this.toogleTodo} filter={this.state.filter}/>
        </div>
      )
    }
  }
}

export default App;

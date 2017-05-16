import React, { Component } from 'react';
import {todos} from '../state.js';

class TodoItem extends Component {

  render() {
    return(
      <div><input onChange={event=>this.props.toogleTodo(this.props.id)} className="js_toggle_todo" type="checkbox" checked={this.props.todoClass}></input><span>{this.props.text}</span></div>
    )
  }
}

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.toogleTodo = this.toogleTodo.bind(this);
  }

  toogleTodo(id) {
    this.props.toogleTodo(id);
  }

  render() {
    var b = this.props.todos.map((item) => <TodoItem text={item.text} key={item.id} id={item.id} todoClass={item.done} toogleTodo={this.toogleTodo}/>)
    return (<div className="styled-checkbox">
             {b}
            </div>
      )
  }
}

export default TodosList;

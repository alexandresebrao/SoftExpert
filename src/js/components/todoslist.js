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
    this.state = {filter: this.props.filter, todos: this.props.todos}
    this.toogleTodo = this.toogleTodo.bind(this);
  }

  toogleTodo(id) {
    this.props.toogleTodo(id);
  }


  render() {
    var that = this;
    var b = this.props.todos.map(function(item) {
      if (that.props.filter === 'showall') {
        return <TodoItem text={item.text} key={item.id} id={item.id} todoClass={item.done} toogleTodo={that.toogleTodo}/>
      }
      else if (that.props.filter === 'showdone') {
        if (item.done) {
          return <TodoItem text={item.text} key={item.id} id={item.id} todoClass={item.done} toogleTodo={that.toogleTodo}/>
        }
      }else if (that.props.filter === 'showopen') {
        if (!item.done) {
          return <TodoItem text={item.text} key={item.id} id={item.id} todoClass={item.done} toogleTodo={that.toogleTodo}/>
        }
      }
    });

    return (<div className="styled-checkbox">
             {b}
            </div>
      )
  }
}

export default TodosList;

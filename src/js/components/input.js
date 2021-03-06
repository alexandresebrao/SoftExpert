import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.updateText = this.updateText.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    this.props.onAdd(this.state.text);
    this.setState({text: ''});
    this.todoInput.value = '';
    this.todoInput.focus();
  }

  updateText(event) {
    this.setState({text: event.target.value});
  }

  handleEnterKey(event) {
      if (event.keyCode === 13) {
        this.handleAddTodo()
      }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterKey.bind(this));
  }

  render() {
    return(
      <div className="row">
          <div className='col-sm-8'>
            <input ref={(input) => { this.todoInput = input; }} type="text" className="form-control" id="todoInput" onChange={this.updateText}></input>
          </div>
          <div className='col-sm-4'>
            <button id="addTodo" className="btn btn-primary" onClick={this.handleAddTodo}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Todo</button>
          </div>
      </div>)
  }
}

export default TodoInput;

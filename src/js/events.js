import {todos} from './state';
import {listen} from './lib/events';
import {addTodo, toggleTodoState} from './actions';
import {visibilityFilter} from './reducers/visibilityFilter';

export function registerEventHandlers() {

    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        todos.dispatch(addTodo(todoInput.value));
        localStorage.setItem("todos", JSON.stringify(todos.getState()))
        event.stopPropagation();
        document.getElementById("todoInput").focus();
    });

    listen('keydown', '#todoInput', event => {
        var key = event.which || event.keyCode;
        if (key === 13) {
          const todoInput = document.getElementById('todoInput');
          todos.dispatch(addTodo(todoInput.value));
          localStorage.setItem("todos", JSON.stringify(todos.getState()));
          event.stopPropagation();
          document.getElementById("todoInput").focus();
        }
      });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
        localStorage.setItem("todos", JSON.stringify(todos.getState()))
    });

    listen('click', '#filterRadio', event => {
        visibilityFilter(event.toElement.value);
    });


}

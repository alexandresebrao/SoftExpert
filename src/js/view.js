import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems),
        renderFilters(),
    );
}

function renderApp(input, todoList, filters) {
    if(isEnabled('filter')) {
      return  renderAddTodoAtTopFilter(input, todoList, filters);
    }
    if(isEnabled('renderBottom')) {
        return renderAddTodoAtBottom(input, todoList);
    } else {
        return renderAddTodoAtTop(input, todoList);
    }
}

function renderAddTodoAtTopFilter(input, todoList, filters) {
    return `<div id="app">
        ${input}
        ${filters}
        ${todoList}
    </div>`;
}

function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderInput() {
    return `<div class="todo__input"><input type="text" id="todoInput"><button id="addTodo">Add</button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderFilters() {
  return  `<div class="todo__filter"><input type="radio" name="filterRadio" id="filterRadio" value="showall" checked="true">Show All</input><input type="radio" name="filterRadio" id="filterRadio" value="showopen">Open</input><input type="radio" name="filterRadio" id="filterRadio" value="showdone" >Done</input></div>`
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        ${todo.text}
    </li>`;
}

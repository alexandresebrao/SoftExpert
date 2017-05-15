import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems),
    );
}

function renderApp(input, todoList) {
    if(isEnabled('renderBottom')) {
        return renderAddTodoAtBottom(input, todoList);
    } else {
        return renderAddTodoAtTop(input, todoList);
    }
}


function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${isEnabled('filter') ? renderFilters() : ''}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${isEnabled('filter') && isEnabled('filterTop')  ? renderFilters() : ''}
        ${todoList}
        ${input}
        ${isEnabled('filter') && !isEnabled('filterTop') ? renderFilters() : ''}
    </div>`;
}

function renderInput() {
    return `<div class="todo__input"><input type="text" id="todoInput"><button id="addTodo" class="btn btn-primary">Add</button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderFilters() {
  return  `<div class="todo__filter">
            <input type="radio" name="filterRadio" id="filterRadio" value="SHOWALL" checked="true">Show All</input>
            <input type="radio" name="filterRadio" id="filterRadio" value="SHOWOPEN">Open</input>
            <input type="radio" name="filterRadio" id="filterRadio" value="SHOWDONE" >Done</input>
          </div>`
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        ${todo.text}
    </li>`;
}

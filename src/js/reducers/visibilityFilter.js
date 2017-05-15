function showAllTodos() {
  const elements = document.getElementsByClassName('todo__item');
  for(var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

function hideOpenedItems() {
    const elements = document.getElementsByClassName('todo__item--open');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

}

function hideDoneItems() {
    const elements = document.getElementsByClassName('todo__item--done');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}

export function visibilityFilter(action)  {
  switch (action) {
    case 'SHOWALL':
      showAllTodos();
      break;
    case 'SHOWOPEN':
      showAllTodos();
      hideDoneItems();
      break;
    case 'SHOWDONE':
      showAllTodos();
      hideOpenedItems();
      break;
  }
}

import { List, Map } from 'immutable';

const initial = List([


  Map({
            id: 0,
            text: 'Take a look at the application',
            done: true
  }),
  Map({
            id: 1,
            text: 'Add ability to filter todos',
            done: false
  }),
  Map({
            id: 2,
            text: 'Filter todos by status',
            done: false
  }),
  Map({
            id: 3,
            text: 'Filter todos by text',
            done: false
  }),
])

export default function(todos=initial, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
          if(t.get('id') === action.payload) {
              return t.update('done', done => !done);
          } else {
              return t;
          }
      });
  default:
      return todos;
    }
}

import API from 'goals-todos-api'

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


 const addTodo = (todo) => ({
      type: ADD_TODO,
      todo,
  })
  
   const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
  });
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
  });
  export const handleDeleteTodo = (todo) => {
    return (dispatch) => {
      dispatch(removeTodo(todo.id));
      return API.deleteTodo(todo.id).catch(() => {
        dispatch(addTodo(todo))
        alert('An error occured')
      });
    }
  }
  export const handleAddTodo = (todo, cb) => {
    return (dispatch) => {
      return API.saveTodo(todo)
      .then(
        (todo) => {dispatch(addTodo(todo))
        cb();
        }
      )
      .catch(() => alert("An error occured please try again"));
    
    }
    }
    
    export const handleToggleTodo = (id) => {
      return (dispatch) => {
        dispatch(toggleTodo(id));
        return API.saveTodoToggle(id)
        .catch(() => {
         dispatch(toggleTodo(id))
          alert('An error occured. Fail to toggle Item');
        }
        );
      }
    }

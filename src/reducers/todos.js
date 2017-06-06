const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    // case 'TOGGLE_TODO':
    //   if (state.id !== action.id) {
    //     return state.filter(({ id }) => id !== action.id)
    //   }
    //   return Object.assign({}, state, {
    //     completed: !state.completed
    //   })
    // case 'DELETE_TODO':
    //   return  state.filter(({ id }) => id !== action.id)

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DELETE_TODO':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default todos

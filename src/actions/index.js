import { v4 } from 'node-uuid'

export const addTodo = (text, description) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text,
    description
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

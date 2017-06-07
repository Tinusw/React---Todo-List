import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  let description

  return (
    <div className="col-lg-12 text-center">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, description.value))
        input.value = ''
        input.description = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input ref={node => {
          description = node
        }} />

        <button type="submit" className="info">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

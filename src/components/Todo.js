import React from 'react'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css'

const Todo = ({ onClick, completed, text }) => (
  <div className='panel-body'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <h1>{text}</h1>
  </div>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

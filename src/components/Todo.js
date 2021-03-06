import React from 'react'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css'

const Todo = ({ onClick, completed, text, description }) => (
  <div className='panel-body'>
    <h1>{text}</h1>
    <h3>{description}</h3>
    <button onClick={onClick} >delete</button>
  </div>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo

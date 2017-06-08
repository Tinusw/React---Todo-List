import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'
import { Modal, PseudoModal } from './Modal'

const App = () => (
  <div className='col-lg-12 text-center'>
    <Modal />
    <VisibileTodoList />
  </div>
)

export default App

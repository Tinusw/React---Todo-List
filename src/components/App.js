import React from 'react'
import VisibileTodoList from '../containers/VisibleTodoList'
import { Modal } from './Modal'

const App = () => (
  <div className='col-lg-12 text-center'>
    <Modal />
    <VisibileTodoList />
  </div>
)

export default App

import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='col-lg-12 text-center'>
    <Header />
    <AddTodo />
    <VisibileTodoList />
  </div>
)

export default App

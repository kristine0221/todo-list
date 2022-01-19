import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Components
import Home from './components/Home'
import Todolist from './components/Todolist'

const App = () => {
  return(
    <div className='app-main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
      </Routes>
    </div>
  )
}
export default App;

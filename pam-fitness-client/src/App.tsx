// import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ServicePage from './pages/ServicePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<ServicePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
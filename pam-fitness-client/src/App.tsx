// import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ServicePage from './pages/ServicePage';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<ServicePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
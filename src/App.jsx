import React from 'react'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<ProductPage/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App

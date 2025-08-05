import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactPage, HomePage, ShopPage } from '../Pages'

const Router = () => {
  return (
 <>
 <BrowserRouter>
 <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/shop' element={<ShopPage/>} />
    <Route  path='/contact' element={<ContactPage/>} />
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default Router

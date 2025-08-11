import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartPage, ContactPage, HomePage, ProductPage, ShopPage } from '../Pages'

const Router = () => {
  return (
 <>
 <BrowserRouter>
 <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/shop' element={<ShopPage/>} />
    <Route  path='/contact' element={<ContactPage/>} />
    <Route  path='/product-page/:id' element={<ProductPage/>} />
    <Route  path='/Cart-Page/:id' element={<CartPage/>} />
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default Router

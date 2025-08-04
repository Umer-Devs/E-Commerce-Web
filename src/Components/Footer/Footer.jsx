import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-black custom-padding py-20 flex flex-col gap-3 text-white'>
 <div className='flex flex-col md:flex-row items-center md:justify-between '>
    <div className='flex flex-col md:flex-row  items-center gap-4'>
        <h2 className=' text-xl md:text-3xl  font-semibold'>3legant.
</h2>
|
<p>Gift & Decoration Store</p>
    </div>
    <ul className='flex  md:flex-row flex-wrap items-center gap-4 '>
        <li>Home</li>
        <li>Shop</li>
        <li>Product</li>
        <li>Contact us</li>
    </ul>
 </div>
 <div className='w-full h-[2px] bg-primary-gray'></div>
 <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
    <div className='flex flex-col md:flex-row  md:items-center gap-3 '>
        <p>Copyright © 2023 3legant. All rights reserved</p>
        <strong>Privacy Policy</strong>
        <strong>Terms of Use</strong>
    </div>
    <div className='flex my-8 sm:my-0 md:items-center gap-4 '>
        <Instagram/>
        <Facebook />
        <Linkedin />
    </div>
 </div>
    </footer>
    </>
  )
}

export default Footer

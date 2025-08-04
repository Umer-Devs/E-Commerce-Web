import React from 'react'
import { img21 } from '../../assets'
import { Mail } from 'lucide-react'

const CtaButton = () => {
  return (
    <section
      className="custom-padding bg-cover mt-[4%] bg-center bg-no-repeat py-16 flex flex-col items-center justify-center text-center "
      style={{ backgroundImage: `url(${img21})` }}
    >
      <h1 className="text-3xl  mb-4">Join Our Newsletter</h1>
      <p className="text-lg mb-6">Sign up for deals, new products and promotions</p>

      <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md shadow-md">
        <Mail className="text-gray-500 mr-2" />
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
        />
        <button className="sm:ml-4 text-white bg-blue-600 px-1 sm:px-4 py-2 rounded-full hover:bg-blue-700 transition">
          SignUp
        </button>
      </div>
    </section>
  )
}

export default CtaButton

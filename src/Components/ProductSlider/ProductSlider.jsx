import { ArrowRightFromLine, Heart, Star } from 'lucide-react'
import React from 'react'
import { imgFour } from '../../assets'
import { motion } from 'framer-motion'

const ProductSlider = () => {
  // Array to loop 4 times
  const products = Array(4).fill({
    image: imgFour,
    title: 'Loveseat Sofa',
    price: '$199.00',
    originalPrice: '$400.00',
  })

  // Framer Motion variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className='py-8 custom-padding'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <h1 className='text-2xl font-bold'>New Arrivals</h1>
        <p className='flex items-center gap-3 underline cursor-pointer'>
          Shop Now <ArrowRightFromLine />
        </p>
      </div>
      <div className='custom-padding py-4 grid grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className='bg-primary-light flex flex-col group'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            custom={index}
          >
            <div className='relative'>
              <motion.div
                className='w-12 h-12 hidden absolute right-1 top-2 group-hover:block text-primary-gray'
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Heart />
              </motion.div>
              <div className='flex flex-col gap-3 absolute left-3 top-3'>
                <span className='p-1 px-3 rounded-md bg-white font-bold'>NEW</span>
                <span className='p-1 px-3 rounded-md bg-primary-green text-white font-bold'>
                  -50%
                </span>
              </div>
              <div className='w-12 h-12 hidden absolute right-1  top-2  group-hover:block text-primary-gray'> <Heart className='' /></div>
              <motion.img
                src={product.image}
                alt={product.title}
                className='w-full h-auto object-cover'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div
              className='w-full flex justify-center p-3 py-6'
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <button className='rounded-md bg-black cursor-pointer text-white px-6 sm:px-10 md:px-16 lg:px-20 py-2'>
                Add to cart
              </button>
            </motion.div>
            <div className='px-4 pb-4'>
              <div className='flex items-center flex-wrap text-primary-gray gap-2'>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className='font-bold'>{product.title}</p>
              <div>
                <span>{product.price}</span>{' '}
                <del className='text-primary-gray'>{product.originalPrice}</del>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProductSlider
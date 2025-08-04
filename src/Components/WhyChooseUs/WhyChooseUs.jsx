import { Car, CreditCard, Package, RefreshCcw } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  // Array for 4 different features
  const features = [
    {
      icon: <Car size={50} />,
      title: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      icon: <CreditCard size={50} />,
      title: 'Secure Payment',
      description: '100% secure payment',
    },
    {
      icon: <Package size={50} />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <RefreshCcw size={50} />,
      title: '24/7 Support',
      description: 'Dedicated customer service',
    },
  ]

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
    <section className='custom-padding flex  py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  md:gap-20 '>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='p-6 rounded-md bg-primary-light flex flex-col gap-3'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            custom={index}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {feature.icon}
            <h2 className='font-semibold text-xl md:text-2xl'>{feature.title}</h2>
            <p className='text-primary-gray'>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
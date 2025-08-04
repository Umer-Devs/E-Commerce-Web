import React, { useState } from 'react'
import { ArrowRight, CircleUserRound, Component, Handbag, Search, X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderOne = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
    const navLink = [
        {
            name: "Home",
            Link: '/'
        },
        {
            name: "Shop",
            Link: '/shop'
        },
        {
            name: "Product",
            Link: '/product'
        },
        {
            name: "Contact Us",
            Link: '/contact'
        },
    ]

    // Animation variants for mobile menu
    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

    // Animation variants for hamburger icon
    const hamburgerVariants = {
        closed: { rotate: 0 },
        open: { rotate: 90 }
    }

    return (
        <>
            <nav className='custom-padding bg-primary-light w-full py-4'>
                <div className='flex flex-col sm:flex-row justify-center items-center sm:gap-6'>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <Component />
                        <p>30% off storewide — Limited time!</p>
                    </div>
                    <Link className='text-primary-blue underline py-3 flex justify-center items-center gap-3' to='/shop'>
                        Shop Now <ArrowRight />
                    </Link>
                </div>
            </nav>
            <nav className='custom-padding py-10 flex justify-between items-center'>
                <h2 className='text-2xl md:text-4xl'>3legant.</h2>
                
                {/* Desktop Navigation */}
                <ul className='hidden md:flex items-center gap-8'>
                    {navLink.map((value, i) => (
                        <li key={i} className='text-lg md:text-xl cursor-pointer hover:text-primary-gray transition-all duration-200'>
                            <Link to={value.Link}>{value.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button 
                    className='md:hidden z-50'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.div
                        variants={hamburgerVariants}
                        animate={isMobileMenuOpen ? 'open' : 'closed'}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </button>

                {/* Desktop Icons */}
                <div className='hidden md:flex items-center gap-5'>
                    <Search />
                    <CircleUserRound />
                    <div className='relative'>
                        <div className='absolute text-xs w-6 bg-primary-blue text-white h-6 rounded-full flex items-center justify-center -right-4 -top-3'>
                            1
                        </div>
                        <Handbag />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className='fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 md:hidden'
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <ul className='flex flex-col items-center gap-8 pt-20'>
                                {navLink.map((value, i) => (
                                    <motion.li
                                        key={i}
                                        className='text-lg cursor-pointer hover:text-primary-gray transition-all duration-200'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Link to={value.Link}>{value.name}</Link>
                                    </motion.li>
                                ))}
                                {/* Mobile Icons */}
                                <motion.div
                                    className='flex items-center gap-5 mt-8'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLink.length * 0.1 }}
                                >
                                    <Search />
                                    <CircleUserRound />
                                    <div className='relative'>
                                        <div className='absolute text-xs w-6 bg-primary-blue text-white h-6 rounded-full flex items-center justify-center -right-4 -top-3'>
                                            1
                                        </div>
                                        <Handbag />
                                    </div>
                                </motion.div>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default HeaderOne ;
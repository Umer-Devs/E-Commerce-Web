import React from 'react';
import { CtaButton, Footer, NavbarOne, ProductSlider, WhyChooseUs } from '../../Components';
import { HomeBanner, imgFive, imgOne, imgSix, imgSix1, imgSix2, imgThree, imgTwo } from '../../assets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRightFromLine } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const images = [HomeBanner, HomeBanner, HomeBanner];

 const blogItems = [
  {
    image: imgSix,
    title: '7 ways to decor your home',
    linkText: 'Shop Now',
  },
  {
    image: imgSix1,
    title: 'Kitchen organization',
    linkText: 'Shop Now',
  },
  {
    image: imgSix2,
    title: 'Decor your bedroom',
    linkText: 'Shop Now',
  },
  // Add more objects if needed...
];

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
  };

  return (
    <>
      {/* header component */}
      <NavbarOne />
      {/* main section */}
      <main className="custom-padding">
        <style>
          {`
            .slick-prev:before,
            .slick-next:before {
              color: black !important;
              font-size: 24px;
            }
            .slick-prev,
            .slick-next {
              z-index: 10;
            }
          `}
        </style>
        <div className="">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  className="w-full rounded-md"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </main>
      {/* section one component */}
      <section className='custom-padding grid md:grid-cols-2 py-8'>
        <h2 className='text-3xl md:text-5xl mb-3 lg:text-7xl xl:text-8xl'>
          Simply Unique/ <br className='hidden md:block' />
          Simply Better.
        </h2>
        <div className='flex items-center'>
          <h2 className='text-xl md:text-2xl lg:text-4xl text-primary-gray'>
            <span className='font-bold'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </h2>
        </div>
      </section>
      {/* section two component */}
      <section className='custom-padding py-8 grid md:grid-cols-2 gap-16'>
        <div className='rounded-md bg-primary-light p-8 row-span-2'>
          <div>
            <h1>Living Room</h1>
            <p className="flex items-center gap-3 underline">Shop Now <ArrowRightFromLine /></p>
            <img src={imgOne} alt="" />
          </div>
        </div>
        <div className='rounded-md bg-primary-light p-8'>
          <div className='flex md:items-end  flex-col md:flex-row '>
            <div>
              <h1>Bedroom</h1>
              <p className="flex  items-center gap-3 underline">Shop Now <ArrowRightFromLine /></p>
            </div>
            <img src={imgTwo} alt="" />
          </div>
        </div>
        <div className='rounded-md bg-primary-light p-8'>
          <div className='flex md:items-end  flex-col md:flex-row'>
            <div>
              <h1>Kitchen</h1>
              <p className="flex items-center gap-3 underline">Shop Now <ArrowRightFromLine /></p>
            </div>
            <img src={imgThree} alt="" />
          </div>
        </div>
      </section>
      {/* section three component */}
      <ProductSlider />
      {/* section four component */}
      <WhyChooseUs />
      {/* section five component */}
      <section className='grid md:grid-cols-2 bg-primary-light mt-[4%]'>
        <div><img src={imgFive} alt="" /></div>
        <div className='flex flex-col justify-center mt-8 sm:mt-0 custom-padding gap-4'>
          <h2 className='text-primary-blue text-xl md:text-2xl'>SALE UP TO 35% OFF</h2>
          <h1>HUNDREDS of New lower prices!</h1>
          <p className='max-w-xl'>It’s more affordable than ever to give every room in your home a stylish makeover</p>
          <p className="flex items-center gap-3 underline">Shop Now <ArrowRightFromLine /></p>
        </div>
      </section>
      {/* section six component */}
      <section className='custom-padding mt-[4%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
        {blogItems.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            custom={index}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src={item.image} alt={item.title} className='w-full h-auto object-cover rounded-md' />
            <h2 className='text-xl md:text-2xl mt-4'>{item.title}</h2>
            <p className="flex items-center gap-3 underline mt-2 cursor-pointer">
              {item.linkText} <ArrowRightFromLine />
            </p>
          </motion.div>
        ))}
      </section>
      {/* section seven componenet  */}
      <CtaButton/>
      {/* section eight componenet  */}
      <Footer/>
    </>
  );
};

export default HomePage;
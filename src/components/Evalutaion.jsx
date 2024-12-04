import React from 'react'
import amazon from '../assets/images/amazon.webp'
import shopify from '../assets/images/shopify.webp'
import ebay from '../assets/images/Ebay.webp'
import commerce from '../assets/images/bigcommerce.webp'

const Evalutaion = () => {
  return (
      <div className='bg-[#0E1122]'>
          <div className='md:max-w-3xl mx-auto px-4 pt-[46px] pb-[54px] flex items-center gap-[52px] max-lg:py-[60px] max-md:gap-8 max-sm:flex-wrap max-md:justify-center'>
              <div>
                  <p className='font-poppins font-medium text-sm leading-[22px] max-md:text-xs text-white'>MAIN SUPPORTED PLATFORMS</p>
              </div>
              <div className='flex items-center gap-[52px] max-md:gap-8 max-sm:flex-wrap max-sm:justify-center'>
                  <a href="#amazon">
                      <img src={amazon} alt="amazon" className='h-5 max-sm:h-[25px]' />
                  </a>
                  <a href="#shopify">
                      <img src={shopify} alt="shopify" className='h-6 max-sm:h-[29px]' />
                  </a>
                  <a href="#ebay">
                      <img src={ebay} alt="ebay" className='h-6 max-sm:h-[29px]' />
                  </a>
                  <a href="#commerce">
                      <img src={commerce} alt="commerce" className='h-6 max-sm:h-[23px]' />
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Evalutaion
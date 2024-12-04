import React from 'react'
import seller from '../assets/images/seller-girl.webp'

const Seller = () => {
  return (
      <div className='py-12'>
          <div className='max-w-[1180px] mx-auto px-4'>
              <div className='flex items-center justify-between max-md:flex-wrap'>
                  <div className='max-md:text-center max-md:w-full'>
                      <h2 className='abril-semi text-[39px] max-lg:text-4xl max-md:text-[28px] max-md:leading-9 max-md:pb-[14px] leading-[45px] text-[#0E1122] pb-5 max-w-[401px] max-md:mx-auto'>Become an 8 figure seller with AI funding</h2>
                      <button className='font-poppins text-base max-md:text-sm font-medium leading-6 max-md:leading-[22px] text-white px-11 py-[10px] max-md:px-6 max-md:py-[9px] bg-[#4C57FF] rounded-3xl hover:bg-[#0E1122] transition-all duration-300'>Apply now</button>
                  </div>
                  <div className='max-md:pt-[43px] max-md:mx-auto'>
                      <img src={seller} alt="seller" className='h-[293px] rounded-[40px] object-cover' />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Seller
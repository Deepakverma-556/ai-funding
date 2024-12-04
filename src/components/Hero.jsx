import React from 'react'
import logo from '../assets/images/logo.webp'
import upcomingFunds from '../assets/images/upcoming-funds.webp'
import graph from '../assets/images/hero-graph.webp'
import forcast from '../assets/images/forcast-revenue.webp'
import sales from '../assets/images/sales-surge.webp'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover bg-no-repeat bg-center pb-56 max-lg:pb-20 max-md:pb-[60px]'>
      <div className='max-w-[1432px] mx-auto'>
        <div className='max-w-max p-6'>
          <a href="logo"><img src={logo} alt="logo" className='max-w-[50px]' /></a>
        </div>
      </div>
      <div className='flex justify-between pt-[263px] max-md:flex-wrap max-md:flex-col-reverse max-w-[1267px] px-4 mx-auto'>
        <div className='max-md:pt-[77px]' >
          <h2 className='abril abrilsemi font- text-[62px] max-lg:text-6xl max-md:text-5xl leading-[66px] max-md:leading-[55px] text-white max-w-[478px]'>Get AI funding for Your Store</h2>
          <p className='max-w-[408px] font-poppins font-medium text-[22px] max-lg:text-xl max-md:text-lg leading-[30px] max-md:leading-7 text-white py-6 max-lg:py-5 max-md:py-3'>AI technology that predicts, plans, and protects your cash flow.</p>
          <button className='font-poppins text-base max-md:text-sm font-medium leading-6 max-md:leading-[22px] text-white px-11 py-[10px] max-md:px-6 max-md:py-[9px] bg-[#4C57FF] rounded-3xl hover:bg-[#0E1122] transition-all duration-300'>Get funded</button>
        </div>
        <div>
          <div className=' relative max-w-[247px] max-md:mx-auto mr-[74px]'>
            <img src={graph} alt="graph" className='h-[155px] w-full ' />
            <img src={upcomingFunds} alt="upcoming-funds" className='h-[77px] absolute -left-10 -top-10' />
            <img src={forcast} alt="forcast" className='h-[75px] absolute -right-10 -bottom-5' />
          </div>
          <img src={sales} alt="sales" className='h-[99px] mt-7 -ml-20 max-md:mx-auto max-md:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Hero
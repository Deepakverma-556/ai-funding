import React from 'react'
import amazon from '../assets/images/amazon.webp'
import shopify from '../assets/images/shopify.webp'
import ebay from '../assets/images/Ebay.webp'
import commerce from '../assets/images/bigcommerce.webp'
import girl from '../assets/images/girl-img.webp'
import revenue from '../assets/images/revenue.webp'
import revenue2 from '../assets/images/revenue-2.webp'
import business from '../assets/images/business.webp'

const Evalutaion = () => {
    return (
        <div className='bg-[#0E1122]'>
            <div className='md:max-w-3xl max-sm:max-w-[290px] mx-auto px-4 pt-[46px] pb-[54px] flex items-center gap-[52px] max-lg:py-20  max-md:py-[60px] max-md:gap-8 max-sm:flex-wrap max-md:justify-center'>
                <div>
                    <p className='font-poppins font-medium text-sm leading-[22px] max-md:text-xs text-white'>MAIN SUPPORTED PLATFORMS</p>
                </div>
                <div className='flex items-center gap-[52px] max-md:gap-8 max-sm:gap-0 max-sm:flex-wrap max-sm:justify-center'>
                    <a href="#amazon">
                        <img src={amazon} alt="amazon" className='h-5 max-sm:h-[25px] max-sm:pr-[67px] max-sm:mb-11' />
                    </a>
                    <a href="#shopify">
                        <img src={shopify} alt="shopify" className='h-6 max-sm:h-[29px] max-sm:mb-11' />
                    </a>
                    <a href="#ebay">
                        <img src={ebay} alt="ebay" className='h-6 max-sm:h-[29px] max-sm:pr-[67px]' />
                    </a>
                    <a href="#commerce">
                        <img src={commerce} alt="commerce" className='h-6 max-sm:h-[23px]' />
                    </a>
                </div>
            </div>

            {/*=============================eveluation========================= */}
            <div className='bg-[#EFECE6] py-[120px] max-lg:py-20 max-md:py-[60px]'>
                <div className='max-w-[1068px] pl-[106px] pr-4 mx-auto max-md:pl-[52px] max-sm:pl-4'>
                    <div className='flex flex-wrap -mx-3 justify-between max-md:flex-col-reverse'>
                        <div className='max-md:w-full w-1/2 px-3 max-md:pt-[84px]'>
                            <div className='relative max-w-max max-sm:ml-8'>
                                <img src={girl} alt="girl" className='h-80 max-lg:h-72 max-md:h-[258px] rounded-[40px] object-cover' />
                                <img src={revenue} alt="revenue" className='h-[171px] max-lg:h-40 max-md:h-[139px] absolute md:top-1/2 md:-translate-y-1/2 md:-left-[90px] object-cover max-md:hidden ' />
                                <img src={revenue2} alt="revenue2" className='h-[171px] max-lg:h-40 max-md:h-[139px] absolute md:top-1/2 md:-translate-y-1/2 md:-left-[90px] object-cover max-md:-top-11 max-md:-left-9 md:hidden ' />
                            </div>
                        </div>
                        <div className='max-md:w-full max-lg:w-1/2 w-5/12 px-3'>
                            <div className='max-md:text-center'>
                                <div className='w-9 h-9 rounded-full bg-[#0E1122] flex justify-center abril-semi text-[28px] text-white max-md:mx-auto'>1</div>
                                <p className='abril-semi font-semibold text-[39px] max-lg:text-4xl max-md:text-[28px] max-md:leading-9 leading-[45px] text-[#0E1122] md:max-w-[358px] pt-[19px] pb-1 max-md:py-[14px]'>Get an AI evaluation of your supply chain needs</p>
                                <p className='font-poppins font-medium text-[22px] max-lg:text-xl max-md:text-lg max-md:leading-7 leading-[30px] text-[#0E1122] pb-5 max-md:pb-[14px]'>By analyzing your sales velocity and growth potential.</p>
                                <button className='font-poppins text-xs max-md:text-sm font-medium leading-5 text-white px-5 py-[6px]  bg-[#4C57FF] rounded-3xl hover:bg-[#0E1122] transition-all duration-300'>Apply now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =======================================rating=============================== */}
            <div className='py-[87px] max-lg:py-20 max-md:py-[60px]'>
                <div className='max-w-[1199px] px-4 mx-auto'>
                    <div className='flex items-center justify-between max-md:flex-wrap max-md:gap-12 max-sm:gap-8'>
                        <div className='flex flex-col justify-center'>
                            <img src={business} alt="business" className='h-8 w-20 max-sm:h-5 max-sm:w-[53px] mx-auto' />
                            <p className='abril-semi text-[50px] max-lg:text-4xl max-sm:text-[31px] max-sm:leading-[43px] leading-[68px] text-white pt-[10px]'>‘A’ Rating </p>
                        </div>
                        <div>
                            <p className='font-poppins text-[19px] max-lg:text-base max-sm:text-xs max-sm:leading-5 leading-[30px] text-white text-center'>Average store growth</p>
                            <p className='abril-semi text-[50px] leading-[68px] max-lg:text-4xl max-sm:text-[31px] max-sm:leading-[43px] text-white pt-[10px] text-center'>400% </p>
                        </div>
                        <div>
                            <p className='font-poppins text-[19px] max-lg:text-base max-sm:text-xs max-sm:leading-5 leading-[30px] text-white text-center flex items-center justify-center'><svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.523 12.6018H20.722L16.768 0.632812L12.8 12.6028L0 12.5898L10.367 19.9938L6.401 31.9498L16.768 24.5578L27.123 31.9498L23.169 19.9938L33.523 12.6018Z" fill="#B0B0B6" />
                            </svg>
                                Trustpilot</p>
                            <p className='abril-semi text-[50px] leading-[68px] max-lg:text-4xl max-sm:text-[31px] max-sm:leading-[43px] text-white pt-[10px] text-center'>Excellent</p>
                        </div>
                        <div className='flex flex-col max-md:justify-center'>
                            <p className='font-poppins text-[19px] max-lg:text-base max-sm:text-xs max-sm:leading-5 leading-[30px] text-white text-center'>Funding given</p>
                            <p className='abril-semi text-[50px] leading-[68px] max-lg:text-4xl max-sm:text-[31px] max-sm:leading-[43px] text-white pt-[10px] text-center'>$450M+ </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evalutaion
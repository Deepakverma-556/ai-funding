import React, { useRef, useState } from "react";

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef();
    const { title, id, content } = faq;

    return (
        <div className=" overflow-hidden border-b border-[#DDDDDF]">
            <div className=" py-5 px-4">
                <div role="button" aria-expanded={active === id} aria-controls={`content-${id}`}
                    className={` flex items-baseline cursor-pointer justify-between p-0 transition-[0.3s] ${active === id ? 'active' : ''}`}
                    onClick={() => handleToggle(id)}>

                    <p className="font-poppins font-medium text-[18px] leading-6 text-[#0E1122] max-sm:max-w-[235px]">{title}</p>

                    <div className={`transition-transform duration-500 ${active === id ? 'rotate-180' : 'rotate-0'}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4V16" stroke="#0E1122" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 10H16" stroke="#0E1122" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
            <div id={`content-${title}`} ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={{
                height: active === id ? `${contentEl.current.scrollHeight}px` : '0px',
                transition: 'height 0.3s ease-out',
            }}
            >
                <p className="font-poppins font-medium text-base leading-6 text-[#0E1122] py-3 px-4 ">{content}</p>
            </div>
        </div>
    );
};


const Faq = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (title) => {
        setActive((prev) => (prev === title ? null : title));
    };

    const faqData = [
        {
            id: 1,
            title: 'Who is eligible for a Growth Plan?',
            content: 'By analyzing your sales velocity and growth potential.',
        },
        {
            id: 2,
            title: 'How much funding can I qualify for?',
            content: 'By analyzing your sales velocity and growth potential.',
        },
        {
            id: 3,
            title: 'What is the cost of the Growth Plan',
            content: 'By analyzing your sales velocity and growth potential.',
        },
        {
            id: 4,
            title: 'Does 8fig charge money for its services?',
            content: 'By analyzing your sales velocity and growth potential.',
        },
    ];

    return (
        <div className='bg-[#EFECE6] pt-[70px] pb-[60px] max-lg:py-20 max-md:py-[60px]'>
            <div className="px-4">
                <p className='text-[#76767F] font-poppins font-medium text-sm leading-[22px] text-center'>STILL HAVE QUESTIONS?</p>
                <h2 className='sbril-semi text-[39px] max-lg:text-4xl max-md:text-[28px] max-md:leading-9 max-md:pt-[14px] leading-[45px] text-[#0E1122] text-center pt-5'>Learn more with FAQ</h2>
            </div>
            <div className="max-w-[1240px] mx-auto px-4 pt-6 max-sm:pt-10">
                <div className="flex flex-col">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default Faq
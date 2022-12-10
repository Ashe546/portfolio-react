import React from 'react'

export default function Home() {
    return (
        <div className='block lg:flex w-full justify-center mt-4 p-4 lg:mt-16 gap-5'>

            <div className='mt-[25px] h-fit lg:h-auto shadow-xl w-full md:w-1/3 lg:w-1/3 border-[30px] border-l-white border-b-white border-r-sky-500 border-t-sky-500 rounded-lg'>
                <img className='h-full w-full' src="/IMG_20220425_173942.jpg" />
            </div>

            <div className=' gap-5 lg:w-1/3 md:w-1/3 w-full flex flex-col justify-center mt-10'>
                <div className='flex w-full  items-start'><span className='p-2 bg-sky-400 text-white'>HELLO</span></div>
                <h2 className='W-FULL font-sans font-semibold text-3xl'>I'M <span className='text-sky-400'>ASHENAFI ENDASHAW</span></h2>
                <p>An undergraduate student, traveler, and computer enthusiast who thrives in discovering the world of the Internet of  Things,
                    Machine Learning, and Cybersecurity Intelligence.Live by the quote <span className='font-bold'>“Do what you have to do, so you can do what you want to”.</span>  My skills include <span className='text-sky-500 font-bold'>React, Redux , NodeJs, Mentoring , Ruby and Rails , database design , JavaScript and MySQL.</span></p>
            </div>

        </div>
    )
}

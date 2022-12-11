import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

    return (
        <div className='block lg:flex w-full justify-center mt-4 p-4 lg:mt-16 gap-5' id='home'>

            <div className='mt-[25px] h-fit lg:h-auto shadow-xl w-full md:w-1/3 lg:w-1/3 border-[30px] border-l-white border-b-white border-r-sky-500 border-t-sky-500 rounded-lg'>
                <img className='h-full w-full' src="/IMG_20220425_173942.jpg" />
            </div>

            <div className=' gap-5 lg:w-1/3 md:w-1/3 w-full flex flex-col justify-center mt-10'>
                <div className='flex w-full  items-start'><span className='p-2 bg-sky-400 text-white'>HELLO</span></div>

                <h2 className='W-FULL font-sans font-semibold text-3xl'>I'M <span className='text-sky-400'>ASHENAFI ENDASHAW</span> </h2>
                <p>An undergraduate student, traveler, and computer enthusiast who thrives in discovering the world of the Internet of  Things,
                    Machine Learning, and Cybersecurity Intelligence.Live by the quote
                    <span className='font-bold'>“Do what you have to do, so you can do what you want to”.</span>  My skills include
                    <span className='text-sky-500 font-bold'>
                        <Typewriter
                            words={[" Html, Css amd Javascript", " React and Redux", " Ruby and Rails", " Database design and API Development", " NodeJs and MySQL", " Mentoring and Pair-Programing"]}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
                <div className='flex px-4 py-2 bg-sky-500 gap-2 text-white font-mono rounded-lg w-fit'>
                    <span className='w-[25px] h-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" /></svg>
                    </span>
                    <a href="My Resume.pdf" download="proposed_file_name">Resume</a>
                </div>

            </div>

        </div>
    )
}

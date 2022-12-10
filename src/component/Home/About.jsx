import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"

export default function About() {
    return (
        <div className='flex flex-col text-center justify-center mt-6'>
            <h1 className='font-sans font-bold text-5xl'>About <span className='text-sky-500'>Me</span></h1>
            <div className='about grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-auto m-4 lg:mx-32 my-10'>
                <div className='flex flex-col text-left gap-5'>
                    <h1>First Name: <span className='font-medium'>Ashenafi</span></h1>
                    <h1>Age: <span className='font-medium'>26</span></h1>
                    <h1>Residence: <span className='font-medium'>Ethiopia</span></h1>
                    <h1>Phone No: <span className='font-medium'>+251922426392</span></h1>
                    <h1>Freelance: <span className='font-medium'>Avilable</span></h1>
                    <h1>Github: <span className='font-medium'>Ashe213</span></h1>
                </div>
                <div className='flex flex-col text-left gap-5'>
                    <h1>Last Name: <span className='font-medium'>Endashaw</span></h1>
                    <h1>BirthDay: <span className='font-medium'>12/july/1997</span></h1>
                    <h1>Langages: <span className='font-medium'>English/Amharic</span></h1>
                    <h1>Email: <span className='font-medium'>asfyd42@gmail.com</span></h1>
                    <h1>Expireance: <span className='font-medium'>3+ Years</span></h1>
                </div>
                <div className='grid grid-rows-2 p-3'>
                    {/* <div className='w-fit h fit text-left'><FontAwesomeIcon icon={faHeart} /></div> */}
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-start justify-items-center gap-3 p-3'>
                        <div className='w-[60px] h-[55px] flex justify-center align-middle bg-white p-3 rounded-lg shadow-md shadow-sky-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" /></svg>
                        </div>
                        <div className='font-bold text-3xl'>345 <sup>+</sup></div>
                        <div className='lg:col-span-2 mt-2 font-medium text-xl font-sans'>HAPPY CLIENTS</div>
                    </div>

                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-start justify-items-center gap-3 p-3'>
                        <div className='w-[60px] h-[55px] flex justify-center align-middle bg-white p-3 rounded-lg shadow-md shadow-sky-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" /></svg>
                        </div>
                        <div className='font-bold text-3xl'>345 <sup>+</sup></div>
                        <div className='lg:col-span-2 mt-2 font-medium text-xl font-sans'>FILES DOWNLOADED</div>
                    </div>

                </div>

                <div className='grid grid-rows-2 p-3'>
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-start justify-items-center gap-3 p-3'>
                        <div className='w-[60px] h-[55px] flex justify-center align-middle bg-white p-3 rounded-lg shadow-md shadow-sky-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" /></svg>
                        </div>
                        <div className='font-bold text-3xl'>345 <sup>+</sup></div>
                        <div className='lg:col-span-2 mt-2 font-medium text-xl font-sans'>PROJECT DONE</div>
                    </div>

                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-start justify-items-center gap-3 p-3'>
                        <div className='w-[60px] h-[55px] flex justify-center align-middle bg-white p-3 rounded-lg shadow-md shadow-sky-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" /></svg> </div>
                        <div className='font-bold text-3xl'>345 <sup>+</sup></div>
                        <div className='lg:col-span-2 mt-2 font-medium text-xl font-sans'>AWARDS WON</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

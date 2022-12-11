import React from 'react'

export default function Contact() {
    return (
        <div className='flex flex-col text-center justify-center mt-6' id='contact'>
            <h1 className='font-sans font-bold text-5xl'> Contact <span className='text-sky-500'>Me</span></h1>
            <div className='grid p-4 md:p-6 md:grid-col-2  lg:px-32 py-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='py-8 px-4 card flex items-center gap-2 flex-col justify-center'>
                    <div className='rounded-full w-[40px] h-[40px]'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" /></svg>
                        </span>
                    </div>
                    <h1 className='font-extrabold font-mono'>MY LOCATION </h1>
                    <p>700 Oak Street, Brockton MA 2301</p>
                </div>

                <div className='py-8 px-4 card flex items-center gap-2 flex-col justify-center'>
                    <div className='rounded-full w-[40px] h-[40px]'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></span>
                    </div>
                    <h1 className='font-extrabold font-mono'>Phone Number</h1>
                    <p>+251922426392</p>
                </div>

                <div className='py-8 px-4 card flex items-center gap-2 flex-col justify-center'>
                    <div className='rounded-full w-[40px] h-[40px]'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg> </span>
                    </div>
                    <h1 className='font-extrabold font-mono'>Email </h1>
                    <p>asfyd42@gmail.com</p>
                </div>
            </div>

            <div className='grid p-4 md:p-6 md:grid-col-2  lg:px-32 py-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4'>
                <div className='py-8 px-4 card flex gap-8 flex-col '>
                    <div className='gap-4 flex flex-row'>
                        <input className='w-1/2 border-b-2 focus:outline-none focus:border-sky-400 ' placeholder='First Name' type="text" />
                        <input className=' focus:outline-none w-1/2 border-b-2 focus:border-sky-400 ' placeholder='Last Name' type="text" />
                    </div>
                    <input className='focus:outline-none w-full border-b-2  focus:border-sky-400' placeholder='Subject' type="text" />
                    <textarea className='focus:outline-none border-b-2 focus:border-sky-400' placeholder='Message' id="" cols="30" rows="10"></textarea>
                </div>
                <div className='py-8 px-4 card flex items-center gap-2 flex-col justify-center'>
                    <h1>kqebjm</h1>
                </div>

            </div>

        </div>
    )
}

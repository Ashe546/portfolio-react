import React from 'react'

export default function Portfolio() {
    return (
        <div className='flex flex-col text-center justify-center mt-6' id='portfolio'>
            <h1 className='font-sans font-bold text-5xl'><span className='text-sky-500'>MY </span> PORTFOLIO</h1>
            <div className='grid p-4 md:p-6 md:grid-col-2  lg:px-32 py-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>

                <a href="https://starlit-lollipop-061c0b.netlify.app/">
                    <div className='bg-[url(/project2.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                        <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                            <h1 className='font-bold text-lg text-white'>Covid Tracking Web App</h1>
                        </div>
                    </div>
                </a>

                <a href="https://ashe546.github.io/Hang-man-game/">
                    <div className='bg-[url(/project3.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                        <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                            <h1 className='font-bold text-lg text-white'>Hang Man</h1>
                        </div>
                    </div>
                </a>

                <a href="https://kanoodlesolver.vercel.app/">
                    <div className='bg-[url(/project4.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                        <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                            <h1 className='font-bold text-lg text-white'>kanoodle Solver</h1>
                        </div>
                    </div>
                </a>

                <a href="https://kmtec.co.uk/">
                    <div className='bg-[url(/project5.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                        <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                            <h1 className='font-bold text-lg text-white'>Km Tec Software Solution </h1>
                        </div>
                    </div>
                </a>

                <a href="https://ashe546.github.io/capstone-1/">
                    <div className='bg-[url(/project6.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                        <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                            <h1 className='font-bold text-lg text-white'>Confrence Web App</h1>
                        </div>
                    </div>
                </a>

                <div className='bg-[url(/project1.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4  card flex flex-col justify-center'>
                    <div className='bg-gray-400 h-full flex flex-col justify-center opacity-0 hover:opacity-90'>
                        <h1 className='font-bold text-lg text-white'>Space Travlers</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

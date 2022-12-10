import React from 'react'

export default function Portfolio() {
    return (
        <div className='flex flex-col text-center justify-center mt-6'>
            <h1 className='font-sans font-bold text-5xl'><span className='text-sky-500'>MY </span> PORTFOLIO</h1>
            <div className='grid p-4 md:p-6 md:grid-col-2  lg:px-32 py-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='bg-[url(/project1.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4  card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>

                <div className='bg-[url(/project2.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>

                <div className='bg-[url(/project3.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>

                <div className='bg-[url(/project3.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>

                <div className='bg-[url(/project3.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>

                <div className='bg-[url(/project3.png)] bg-no-repeat bg-[length:100%_100%] py-8 px-4 card-bg-img card flex flex-col justify-center'>
                    <div className='bg-sky-500 h-full flex flex-col justify-center opacity-0 hover:opacity-100'>G</div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function WhatIDo() {
    return (
        <div className='flex flex-col text-center justify-center mt-6'>
            <h1 className='font-sans font-bold text-5xl'>WHAT I <span className='text-sky-500'>DO</span></h1>
            <div className='grid p-4 md:p-6 md:grid-col-2  lg:px-32 py-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <svg className='w-[70px] h-[70px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" /></svg>
                    </div>
                    <h1>Web Developer </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src='/responsive-design.png' /><img /> </div>
                    <h1>Responcive Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src='/api.png' /><img />
                    </div>
                    <h1>Api Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src='/data.png' /><img />
                    </div>
                    <h1>Database Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src='/web-host.png' /><img />
                    </div>
                    <h1>Web Hoasting</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
                <div className='py-8 px-4 w-full h-fit card flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src='/testing.png' /><img />
                    </div>
                    <h1>Web Teasting</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!</p>
                </div>
            </div>
        </div>
    )
}

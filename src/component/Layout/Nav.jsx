import React from 'react'

export default function Nav({ toggle, handleToggel }) {
    return (
        <div className="flex justify-end mt-3 mr-3">
            <div className={`border-2 border-sky-500 shadow-2xl w-fit ${toggle === true ? "rounded-tr-3xl" : "rounded-full"} bg-white lg:rounded-full flex fixed`}>
                <ul className={`${toggle === true ? "block lg:flex" : "hidden"} gap-8 lg:gap-5 py-10 lg:py-2 px-8`}>
                    <a href="#home"><li className="font-medium text-lg hover:text-sky-500">Home</li> </a>
                    <a href="#about"><li className="font-medium text-lg hover:text-sky-500">About</li> </a>
                    <a href="#work"><li className="font-medium text-lg hover:text-sky-500">Works</li></a>
                    <a href="#portfolio"><li className="font-medium text-lg hover:text-sky-500">Portfolio</li></a>                    <a href="#contact"><li className="font-medium text-lg hover:text-sky-500">Contact</li> </a>
                </ul>
                <div onClick={() => handleToggel()} className="h-[46px] w-[46px] shadow-blue-900 shadow-5xl bg-sky-500 rounded-full">
                    {toggle === true ? <div className="w-full h-full px-2 relative top-0 left-0">
                        <span className="block h-[2px] w-1/3 left-[15px] absolute bg-white border-r-7 top-[22px] rotate-45"></span>
                        <span className="block h-[2px] w-1/3 left-[15px] absolute bg-white border-r-7 top-[22px] rotate-[-45deg]"></span>
                    </div>
                        :
                        <div className="w-full h-full px-2 relative top-0 left-0">
                            <span className="block h-[2px] w-1/3 left-[15px] absolute bg-white border-r-7 top-[14px]"></span>
                            <span className="block h-[2px] w-1/3 left-[15px] absolute bg-white border-r-7 top-[22px]"></span>
                            <span className="block h-[2px] w-1/3 left-[15px] absolute bg-white border-r-7 top-[30px]"></span>
                        </div>}
                </div>
            </div>
        </div>
    )
}

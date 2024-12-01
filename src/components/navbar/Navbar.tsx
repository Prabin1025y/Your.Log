import React from 'react'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'

const Navbar = () => {
    return (
        <div className='w-full h-fit bg-[#3C3D37]'>
            <div className='sticky px-4 sm:px-1 top-0 h-20 w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mx-auto overflow-x-hidden flex justify-between items-center'>
                <p className='font-[DynaPuff] text-2xl'>Your.<span className='text-lime-400'>Log</span></p>
                <ul className='flex gap-4 xl:gap-8 font-[Roboto]'>
                    <li className='my-auto'><Switch defaultChecked /></li>
                    <li className='my-auto cursor-pointer'>Home</li>
                    <li className='my-auto cursor-pointer'>Contact</li>
                    <li className='my-auto cursor-pointer'>About</li>
                    <li><Button className='rounded-full bg-lime-400 hover:bg-lime-500 text-black font-semibold'>Login</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
import { Facebook, Github, Instagram, Linkedin, Twitter, X, XIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-fit bg-[#3C3D37] py-4'>
            <div className='sticky px-4 sm:px-1 top-0 h-full w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mx-auto overflow-x-hidden flex justify-between'>
                <div className='flex w-full py-4'>
                    <div className='flex-[3] flex flex-col justify-between h-full'>
                        <div>
                            <p className='font-[DynaPuff] text-3xl'>Your.<span className='text-lime-400'>Log</span></p>
                            <p className='font-[DynaPuff]'>Share And <span className='text-lime-400'>Learn</span></p>
                        </div>
                        <div className='flex gap-4'>
                            <Instagram className='cursor-pointer' fill='gray' />
                            <Facebook className='cursor-pointer' fill='gray'/>
                            <Github className='cursor-pointer' fill='gray'/>
                            <Twitter className='cursor-pointer' fill='gray'/>
                            <Linkedin className='cursor-pointer' fill='gray'/>
                        </div>
                    </div>
                    <ul className='flex-[1] flex flex-col gap-2'>
                        <li>LINKS</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>Home</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>About</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>Contact</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>Github</li>
                    </ul>
                    <ul className='flex-[1] flex flex-col gap-2'>
                        <li>OTHER PROJECTS</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>Raag</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>GuffGaff</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>StoreHUB</li>
                        <li className='text-gray-400 text-sm cursor-pointer hover:underline'>Better Together</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='py-5 grid place-items-center text-gray-400 text-sm'>Copyright &copy; 2024 - Prabin Acharya</p>
        </footer>
    )
}

export default Footer
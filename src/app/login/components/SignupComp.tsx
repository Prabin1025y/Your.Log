import { Button } from '@/components/ui/button'
import GithubIcon from '@/svgs/GithubIcon'
import GoogleIcon from '@/svgs/GoogleIcon'
import React from 'react'

const SignupComp = () => {
    return (
        <div className='w-1/2 mx-auto  flex flex-col gap-8'>
            <h2 className='w-full flex justify-center text-3xl text-lime-400 font-[DynaPuff] my-8'>SignUp</h2>
            <div className='flex flex-col gap-8'>
                <input type="text" name="fullName" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Full Name' />
                <input type="text" name="email" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Email' />
                <input type="text" name="username" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Username' />
                <input type="password" name="password" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Password' />
                <input type="password" name="confirmPassword" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Confirm Password' />
            </div>
            <p className='mx-auto'>or</p>
            <div className='flex gap-8 mx-auto'>
                <Button className='bg-transparent border rounded-full w-24'><GoogleIcon /> Google</Button>
                <Button className='bg-transparent border rounded-full w-24'><GithubIcon /> Github</Button>
            </div>
            <p className='mx-auto'>Already have an account? <span className='hover:underline cursor-pointer text-lime-400'>login here</span></p>
        </div>
    )
}

export default SignupComp
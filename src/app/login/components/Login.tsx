'use client'
import { Button } from '@/components/ui/button'
import GithubIcon from '@/svgs/GithubIcon'
import GoogleIcon from '@/svgs/GoogleIcon'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginComp = () => {
    const { data, status } = useSession();
    console.log(data, status);
    
    const router = useRouter();

    if (status === "authenticated")
        router.push("/");

    return (
        <div className='w-1/2 mx-auto h-1/2 flex flex-col gap-8'>
            <h2 className='w-full flex justify-center text-3xl text-lime-400 font-[DynaPuff] my-8'>Login</h2>
            <div className='flex flex-col gap-8'>
                <input type="text" name="email" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Enter Your Email..' />
                <input type="password" name="password" className='border-b-2 outline-none bg-transparent w-full  py-1 placeholder:text-gray-400 border-lime-400' placeholder='Enter Your Password' />
            </div>
            <p className='mx-auto'>or</p>
            <div className='flex gap-8 mx-auto'>
                <Button disabled={status === "loading"} onClick={() => signIn("google")} className='bg-transparent border rounded-full w-24'><GoogleIcon /> Google</Button>
                <Button disabled={status === "loading"} onClick={() => signIn("github")} className='bg-transparent border rounded-full w-24'><GithubIcon /> Github</Button>
            </div>
            <p className='mx-auto'>Don't have an account yet? <span className='hover:underline cursor-pointer text-lime-400'>signin here</span></p>
        </div>
    )
}

export default LoginComp
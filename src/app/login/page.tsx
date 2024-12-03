import React from 'react'
import LoginComp from './components/Login'

const Login = () => {
    return (
        <div className=' py-20 px-[300px] h-screen'>
            <div className='h-full bg-red-500 rounded-xl overflow-hidden flex'>
                <div className='flex-[4] h-full bg-lime-300 bg-[url("/bg1.png")] bg-no-repeat bg-cover flex flex-col items-center justify-center'>
                    {/* <p className='font-[Poppins] text-3xl'>Welcome to</p> */}
                    <p className='font-[DynaPuff] text-2xl'>Your.<span className='text-lime-400'>Log</span></p>
                    <p>"Sharing is the best way to learn."</p>
                </div>
                <div className='flex-[6] h-full bg-[#3C3D37] flex items-center'>
                    <LoginComp />
                    {/* <SignupComp /> */}
                </div>
            </div>
        </div>
    )
}

export default Login
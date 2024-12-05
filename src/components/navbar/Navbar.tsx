'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { LogOut } from 'lucide-react'

const Navbar = () => {
    const { status, data } = useSession();
    const router = useRouter();

    const handleAuthButtonCLick = () => {
        router.push("/login");
    }
    return (
        <div className='w-full h-fit bg-[#3C3D37]'>
            <div className='sticky px-4 sm:px-1 top-0 h-20 w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mx-auto overflow-x-hidden flex justify-between items-center'>
                <p className='font-[DynaPuff] text-2xl'>Your.<span className='text-lime-400'>Log</span></p>
                <ul className='flex gap-4 xl:gap-8 font-[Roboto]'>
                    <li className='my-auto'><Switch defaultChecked /></li>
                    <li className='my-auto cursor-pointer'>Home</li>
                    <li className='my-auto cursor-pointer'>Contact</li>
                    <li className='my-auto cursor-pointer'>About</li>
                    {status === "authenticated" ?
                        <HoverCard>
                            <HoverCardTrigger>
                                <img className='h-12 rounded-full border-2 border-lime-400 cursor-pointer' src={data?.user?.image || "https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg?ssl=1"} alt="image" />
                            </HoverCardTrigger>
                            <HoverCardContent className='bg-[#181C14]'>
                                <Button onClick={() => signOut()} className='w-full bg-transparent justify-start shadow-none hover:bg-[#3C3D37]' ><LogOut />Log Out</Button>
                            </HoverCardContent>
                        </HoverCard>
                        : <li><Button disabled={status === "loading"} onClick={handleAuthButtonCLick} className='rounded-full bg-lime-400 hover:bg-lime-500 text-black font-semibold'>Login</Button></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
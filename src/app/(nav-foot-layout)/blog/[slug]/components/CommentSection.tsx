
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const CommentSection = () => {

    return (
        <div>
            <h3 className='text-xl text-lime-400 font-semibold my-3'>
                Comments
            </h3>
            <div className='flex gap-3 my-4'>
                <input type="text" className='w-full rounded-lg bg-[#3C3D37] border px-6 py-1 h-fit' placeholder='Type your comment...' />
                <Button>Post</Button>
            </div>
            <div className='flex flex-col gap-12'>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <img className='h-7 aspect-square rounded-full object-cover my-auto' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="comment image" />
                        <div >
                            <p className='text-sm'>Prabin Acharya</p>
                            <p className='text-xs text-gray-400'>DEC 4 2024</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus id quos dicta.</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <img className='h-7 aspect-square rounded-full object-cover my-auto' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="comment image" />
                        <div >
                            <p className='text-sm'>Prajwal Gautam</p>
                            <p className='text-xs text-gray-400'>DEC 4 2024</p>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque autem repudiandae labore voluptatibus eveniet earum officiis iste vitae at quasi iusto, repellat, hic numquam.</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <img className='h-7 aspect-square rounded-full object-cover my-auto' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="comment image" />
                        <div >
                            <p className='text-sm'>Ganesh Dahal</p>
                            <p className='text-xs text-gray-400'>DEC 4 2024</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deserunt? Deleniti, vel veniam itaque quibusdam ipsam animi.</p>
                </div>
            </div>
        </div>
    )
}

export default CommentSection
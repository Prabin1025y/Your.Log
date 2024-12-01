import Link from 'next/link'
import React from 'react'

const PostsContainer = () => {
    return (
        <div className='flex'>
            <div className='flex-[5]'>
                <h3 className='text-2xl text-lime-400 font-semibold my-3'>
                    Recent Posts
                </h3>
                <div className='flex flex-col gap-12'>
                    {Array.from({ length: 7 }).map((post, index) => (
                        <div key={index} className='flex gap-7'>
                            <img className='w-[40%] object-cover rounded-lg' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="image 2" />
                            <div className='min-h-full flex flex-col justify-between flex-1'>
                                <p className='text-sm text-gray-400'>{new Date().toString()}</p>
                                <div>
                                    <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium aliquam voluptates!</p>
                                    <p className='text-sm line-clamp-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur magni voluptas saepe, dolor facere nulla odit ex hic assumenda id provident quisquam enim, voluptatem distinctio. Aliquam doloribus voluptas rerum...</p>
                                </div>
                                <Link href="/" className='cursor-pointer underline5 text-gray-400' ><span className='border-b border-red-500'>Read More</span></Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='flex-[2]'>
                side posts
            </div>
        </div>
    )
}

export default PostsContainer
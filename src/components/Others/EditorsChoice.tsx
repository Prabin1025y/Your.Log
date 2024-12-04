import React, { useEffect, useState } from 'react'

const EditorsChoice = () => {
    return (
        <div>
            <h3 className='text-xl text-lime-400 font-semibold my-3'>
                Editor's Choice
            </h3>
            <div className="flex flex-col gap-5">
                {Array.from({ length: 4 }).map((post, index) => (
                    <div key={index} className='flex gap-4'>
                        <img className='aspect-square rounded-full object-cover h-16' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="image 3" />
                        <div>
                            <h4 className='font-semibold line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates ullam similique.</h4>
                            <p className='text-xs text-gray-400'><span className='text-lime-400'>Prabin</span> • DEC 4 2024</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EditorsChoice
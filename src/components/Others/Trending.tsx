import React from 'react'

const Trending = () => {
    return (
        <div>
            <h3 className='text-xl text-lime-400 font-semibold my-3'>
                Trending Posts
            </h3>

            <div className="flex flex-col gap-5">
                {Array.from({ length: 4 }).map((post, index) => (
                    <div key={index}>
                        <h4 className='font-semibold line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates ullam similique.</h4>
                        <p className='text-xs text-gray-400'><span className='text-lime-400'>Prabin</span> • {new Date().toDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending
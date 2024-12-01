import React from 'react'
import { Button } from '../ui/button'

const Intro = () => {
    return (
        <div className='py-4 font-[Roboto] flex flex-col gap-10'>
            <div>
                <h2 className='text-3xl font-semibold'>
                    Welcome to <span className='font-[DynaPuff]'>Your.<span className='text-lime-400'>Log</span></span>
                </h2>
                <p className='text-lg'>
                    A place where curiosity meets creativity. Whether you're here to explore new ideas, learn something new, or find inspiration for your next project, you'll find a little bit of everything. Join me on this journey of discovery, and let’s learn and grow together!"
                </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 items-center lg:items-stretch'>
                <img className='w-full md:w-2/3 lg:w-1/2 object-cover rounded-lg' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="image 1" />
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-2xl font-bold mb-2 lg:mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur reprehenderit perferendis numquam, doloremque harum animi id quia, nemo non ipsam sint quidem earum accusantium ex sed. Illo earum mollitia ea quam, nulla illum expedita consequuntur consectetur incidunt eaque vitae excepturi, error fugit culpa cum. Illo dolorem, nulla inventore voluptate repellat dolor suscipit sit, reprehenderit molestiae magni, iusto provident consequuntur quia recusandae consectetur? Iusto nemo facere sapiente obcaecati cumque veritatis assumenda eius itaque nam dicta pariatur tenetur praesentium porro provident quos quia, laboriosam animi tempore aliquid expedita quasi! Cupiditate, voluptates!</p>
                    <Button className='mt-3 bg-lime-600 hover:bg-lime-800'>Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default Intro
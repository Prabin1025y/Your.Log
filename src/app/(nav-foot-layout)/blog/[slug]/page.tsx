import EditorsChoice from '@/components/Others/EditorsChoice'
import Trending from '@/components/Others/Trending'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import CommentSection from './components/CommentSection'

const BlogPage = () => {


    return (
        <>
            <div className='flex py-4'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h2 className='text-[3rem] font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolore. Magni, ipsa.</h2>
                    <div className='flex gap-2 m-4'>
                        <img className='rounded-full aspect-square h-10 object-cover' src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="image 5" />
                        <div>
                            <p>Prabin Acharya</p>
                            <p className='text-xs text-gray-400'>DEC 4 2024</p>
                        </div>
                    </div>
                </div>
                <img src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg' alt='image 4' className='w-1/2 rounded-lg'></img>
            </div>

            <div className='flex gap-5'>

                <div className='flex-[5] py-10 text-justify'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis alias ratione minus, ex adipisci consectetur quae,
                        id tenetur molestiae porro quibusdam nisi dignissimos? Ullam quasi ipsa officiis deleniti aperiam iusto, quo enim quae
                        fugiat sunt quos sint dicta porro voluptatibus libero corporis repudiandae, provident beatae id. Molestias autem
                        magnam saepe aperiam qui velit, quis laborum mollitia. Exercitationem dignissimos libero temporibus quis non dolorem
                        voluptate, quam commodi voluptates distinctio optio nobis alias totam qui fugiat ipsum voluptatem obcaecati possimus,
                        error id iure! Modi reprehenderit repudiandae vero atque cupiditate facilis quaerat quas ipsam odit unde laudantium
                        , magnam dolore tenetur, porro animi molestias quos ipsum alias nisi officia id, nulla qui praesentium! Fuga enim
                        aperiam cumque ab repudiandae reiciendis alias nostrum. Esse doloribus quos temporibus nam, velit rerum quia molestiae
                        assumenda amet alias. Culpa eligendi earum ullam dolorem ipsum doloremque fugiat, fugit omnis maiores voluptatum
                        aperiam enim repellendus eveniet accusamus veritatis quod expedita.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis alias ratione minus, ex adipisci consectetur quae,
                        id tenetur molestiae porro quibusdam nisi dignissimos? Ullam quasi ipsa officiis deleniti aperiam iusto, quo enim quae
                        fugiat sunt quos sint dicta porro voluptatibus libero corporis repudiandae, provident beatae id. Molestias autem
                        magnam saepe aperiam qui velit, quis laborum mollitia. Exercitationem dignissimos libero temporibus quis non dolorem
                        voluptate, quam commodi voluptates distinctio optio nobis alias totam qui fugiat ipsum voluptatem obcaecati possimus,
                        error id iure! Modi reprehenderit repudiandae vero atque cupiditate facilis quaerat quas ipsam odit unde laudantium
                        , magnam dolore tenetur, porro animi molestias quos ipsum alias nisi officia id, nulla qui praesentium! Fuga enim
                        aperiam cumque ab repudiandae reiciendis alias nostrum. Esse doloribus quos temporibus nam, velit rerum quia molestiae
                        assumenda amet alias. Culpa eligendi earum ullam dolorem ipsum doloremque fugiat, fugit omnis maiores voluptatum
                        aperiam enim repellendus eveniet accusamus veritatis quod expedita.</p>

                    <div className='flex justify-between my-6'>
                        <Button className='w-24'>Previous</Button>
                        <Button className='w-24'>Next</Button>
                    </div>

                    {/* Comments */}
                    <CommentSection />

                </div>



                <div className='flex-[2]'>
                    <Trending />
                    <div className='h-32 bg-yellow-500 my-4 rounded-lg ' />
                    <EditorsChoice />
                </div>

            </div >
        </>
    )
}

export default BlogPage
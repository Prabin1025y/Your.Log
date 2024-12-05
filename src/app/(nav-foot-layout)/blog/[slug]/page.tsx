import EditorsChoice from '@/components/Others/EditorsChoice'
import Trending from '@/components/Others/Trending'
import { Button } from '@/components/ui/button'
import CommentSection from './components/CommentSection'
import { Post } from '../../../../../types/types'

const getData = async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`);

    if (!res.ok)
        return alert("Error");

    const data = await res.json();

    if (!data.success)
        return alert(data.message);

    return data.post;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const post: Post = await getData(params.slug);

    return (
        <>
            <div className='flex py-4'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h2 className='text-[3rem] font-semibold'>{post.title}</h2>
                    <div className='flex gap-2 m-4'>
                        <img className='rounded-full aspect-square h-10 object-cover' src={post.user.image} alt="image 5" />
                        <div>
                            <p>{post.user.name}</p>
                            <p className='text-xs text-gray-400'>{post.createdAt.toString().split("T")[0]}</p>
                        </div>
                    </div>
                </div>
                <img src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg' alt='image 4' className='w-1/2 rounded-lg'></img>
            </div>

            <div className='flex gap-5'>

                <div className='flex-[5] py-10 text-justify'>
                    <p>{post.content}</p>

                    <div className='flex justify-between my-6'>
                        <Button className='w-24'>Previous</Button>
                        <Button className='w-24'>Next</Button>
                    </div>

                    {/* Comments */}
                    <CommentSection slug={params.slug} />

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
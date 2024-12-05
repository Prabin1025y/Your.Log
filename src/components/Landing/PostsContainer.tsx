import Link from 'next/link'
import { Button } from '../ui/button'
import Trending from '../Others/Trending'
import EditorsChoice from '../Others/EditorsChoice'
import { Post } from '../../../types/types'
import PageControls from './PageControls'

const getData = async (page: number, cat: string) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, { cache: "no-store" });

    if (!res.ok)
        return alert("Error");

    const data = await res.json();

    if (!data.success)
        return alert(data.message);

    return data;
}
const PostsContainer = async ({ page, cat }: { page: number, cat: string }) => {
    const { posts, count } = await getData(page, cat);

    const POST_PER_PAGE = 4;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = (POST_PER_PAGE * (page - 1)) + POST_PER_PAGE < count;

    return (
        <div className='flex gap-5'>
            <div className='flex-[5]'>
                <h3 className='text-2xl text-lime-400 font-semibold my-3'>
                    Recent Posts
                </h3>
                <div className='flex flex-col gap-12'>
                    {posts?.map((post: Post, index: number) => (
                        <div className='flex gap-7'>
                            <img className='w-[40%] object-cover rounded-lg' src={post.image} alt="image 2" />
                            <div className='min-h-full flex flex-col  flex-1'>
                                <p className='text-sm text-gray-400'>{post.createdAt.toString().split("T")[0]}</p>
                                <div>
                                    <p className='text-xl font-semibold'>{post.title}</p>
                                    <p className='text-sm line-clamp-3 text-gray-400'>{post.content}</p>
                                </div>
                                <Link href="/" className='cursor-pointer underline5 text-gray-400' ><span className='border-b border-red-500'>Read More</span></Link>
                            </div>
                        </div>
                    ))}

                </div>
                <PageControls page={page} hasPrev={hasPrev} hasNext={hasNext} />
            </div>



            <div className='flex-[2]'>
                <Trending />
                <div className='h-32 bg-yellow-500 my-4 rounded-lg ' />
                <EditorsChoice />
            </div>
        </div>
    )
}

export default PostsContainer
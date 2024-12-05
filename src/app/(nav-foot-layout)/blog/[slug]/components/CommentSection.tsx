
import { Button } from '@/components/ui/button'
import { Comment } from '../../../../../../types/types';

const getData = async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/comments?postSlug=${slug}`);

    if (!res.ok)
        return alert("Error");

    const data = await res.json();

    if (!data.success)
        return alert(data.message);

    return data.comments;
}

const CommentSection = async ({ slug }: { slug: string }) => {
    const comments: Comment[] = await getData(slug);
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
                {comments.map(comment => (
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2'>
                            <img className='h-7 aspect-square rounded-full object-cover my-auto' src={comment.user.image} alt="comment image" />
                            <div >
                                <p className='text-sm'>{comment.user.name}</p>
                                <p className='text-xs text-gray-400'>{comment.createdAt.toString().split("T")[0]}</p>
                            </div>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentSection
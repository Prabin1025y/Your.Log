'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const PageControls = ({ page, hasNext, hasPrev }: { page: number, hasNext: boolean, hasPrev: boolean }) => {
    const router = useRouter();
    return (
        <div className='flex justify-between my-6'>
            <Button className='w-24' disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>Previous</Button>
            <Button className='w-24' disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>Next</Button>
        </div>
    )
}

export default PageControls
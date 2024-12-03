import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className=" w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mx-auto px-6 sm:px-12 min-h-[calc(100vh-80px)] overflow-x-hidden scrollbar">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout
import React from 'react'

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="relative w-40 h-40 rounded-full border-4 border-black overflow-hidden flex flex-col">
                <div className="flex-1 bg-red-500 border-b-4 border-black"></div>
                <div className="flex-1 bg-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-16 h-16 bg-black rounded-full border-4 border-white 
                    flex justify-center items-center">
                    <p className="text-white font-bold">START</p>
                </div>
            </div>
        </div>


    )
}

export default Home
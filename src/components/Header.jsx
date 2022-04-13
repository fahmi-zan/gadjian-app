import React from 'react'

function Header() {
    return (
        <>
            <div className='bg-red-100 mx-5 my-7 p-5'>
                <h1 className='text-primary font-extrabold text-5xl'>PERSONNEL LIST</h1>
                <h3 className='text-3xl font-normal text-gray-600'>List of all personnels</h3>
                <div className='flex items-center p-3 border-2 border-gray-400 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" className='bg-transparent outline-none mx-2 p-1 w-full text-lg' placeholder='Find Personnels' />
                </div>
                <button className='block items-center bg-primary w-full p-3 my-2'>
                    <p className='uppercase mx-2 text-xl font-bold text-white flex justify-between'>Add Personnels
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg></p>
                </button>
            </div>
        </>
    )
}

export default Header
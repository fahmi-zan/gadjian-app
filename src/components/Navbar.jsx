import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700">
                <div className="container-fluid w-full flex items-center justify-between px-6 py-2">
                    <div className="container-fluid flex items-center">
                        <button className='cursor-pointer mx-2 md:hidden'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg></button>
                        <img src='Logo.svg' alt='' className="w-40" />
                    </div>
                    <div className='mx-3 flex justify-end items-center'>
                        <p className='text-lg px-2 hidden md:block'>Hallo, <span className='text-primary'>Gadjian User</span></p>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="profile" className='rounded-full w-12 h-12 object-cover' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
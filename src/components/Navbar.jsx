import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 py-2">
                    <div className="container-fluid">
                        <img src='Logo.png' alt='' className="w-40" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
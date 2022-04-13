import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { masa } from 'masa';

function Content() {
    const posts = useSelector(({ listPost }) => listPost)
    const [pageNumber, setPageNumber] = useState(0)

    // Pagination
    const postsPerPage = 4
    const pageVisited = pageNumber * postsPerPage

    const pageCount = Math.ceil(posts.length / postsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // Data Posts Personnels
    const displayPosts = posts.slice(pageVisited, pageVisited + postsPerPage).map((el, i) => {
        return (
            <div key={i} className='bg-white shadow-md max-w-md md:w-52 mx-auto my-3 md:mx-2 rounded-xl'>
                <div className='flex justify-between items-center px-5 md:px-2 py-3'>
                    <p className='text-lg md:text-sm truncate text-clip overflow-hidden md:mr-3'>Personnel ID: {el.id.value}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
                <div className='border-2'></div>
                <div className='h-60 md:h-full p-5 flex justify-items-start items-center md:block'>
                    <div className='rounded-full drop-shadow-sm overflow-hidden border-2 border-gray-400 md:mx-auto md:w-32'>
                        <img src={el.picture.large} alt="personnel" className='object-cover object-center w-44 md:w-32' />
                    </div>
                    <div className='m-9 md:m-1'>
                        <p className='text-md-left font-medium'>Name</p>
                        <p className='text-lg-left md:text-sm font-normal'>{el.name.title + " " + el.name.first + " " + el.name.last}</p>
                        <p className='text-md-left font-medium'>Telephone</p>
                        <p className='text-lg-left md:text-sm font-normal'>{el.phone}</p>
                        <p className='text-md-left font-medium hidden md:block'>Birthday</p>
                        <p className='text-lg-left md:text-sm font-normal hidden md:block'>{masa(el.dob.date).format()}</p>
                        <p className='text-md-left font-medium hidden md:block'>Email</p>
                        <p className='text-lg-left md:text-sm font-normal hidden md:block break-words'>{el.email}</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>
            <div className='container w-full md:flex md:justify-evenly relative'>
                {/* Card Personnels */}
                {displayPosts}

                {/* Implementation Pagination Page */}
            </div>
            <div className='block my-3'>
                <ReactPaginate
                    previousLabel={'< Previous Page'}
                    nextLabel={'Next Page >'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBtn'}
                    previousLinkClassName={'previousBtn'}
                    nextLinkClassName={'nextBtn'}
                    activeClassName={'paginationActive'}
                    disabledLinkClassName={'paginationDisable'}
                />
            </div>
        </>
    )
}

export default Content
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';

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
    const displayPosts = posts.slice(pageVisited, pageVisited + postsPerPage).map((el, i) => {
        return (
            <div key={i} className='bg-red-300 max-w-md xl:w-72 mx-auto my-3 xl:mx-3 rounded-xl'>
                <p className='flex justify-between items-center px-5 py-3 text-lg '>Personnel ID: {el.id.value}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg></p>
                <div className='border-2'></div>
                <div className='h-60 xl:h-full p-5 flex justify-items-start items-center xl:block'>
                    <div className=' rounded-full overflow-hidden border-2 xl:mx-auto'>
                        <img src={el.picture.large} alt="personnel" className='object-cover object-center w-44 xl:w-full' />
                    </div>
                    <div className='m-9 xl:m-3'>
                        <p className='text-md-left font-medium'>Name</p>
                        <p className='text-lg-left font-normal'>{el.name.title + " " + el.name.first + " " + el.name.last}</p>
                        <p className='text-md-left font-medium'>Telephone</p>
                        <p className='text-lg-left font-normal'>{el.phone}</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>
            <div className='container w-full xl:flex xl:justify-evenly xl:flex-wrap'>
                {/* Card Personnels */}
                {displayPosts}
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
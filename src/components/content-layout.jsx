import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='text-white px-12 sm:px-16 md:px-20 lg:px-44'>
            {children}
        </div>
    )
}

export default ContentLayout
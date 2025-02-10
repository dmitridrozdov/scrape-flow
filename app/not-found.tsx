import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p className='text-2xl font-semibold'>Page not found</p>
            <p className='text-lg'>The page you are looking for does not exist.</p>
        </div>
    </div>
  )
}

export default NotFoundPage
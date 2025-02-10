import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p className='text-2xl font-semibold'>Page not found</p>
            <p className='text-lg'>The page you are looking for does not exist.</p>
            <div className='flex gap-2'>
                <p className='text-lg'>Go back to</p>
                <a className='text-lg font-semibold underline' href='/'>Home</a>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage
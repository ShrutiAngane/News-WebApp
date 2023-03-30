import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-[100%] flex flex-col h-[100%] justify-start items-center'>
        <h1 className='text-[red] font-errorfont text-[40px] md:text-[80px]'>Error 404</h1>
        <h1 className='text-[red] font-errorfont text-[40px] md:text-[80px]'>Page Not Found!</h1>
        <Link to='/' className='text-secondary text-[20px] hover:cursor-pointer hover:underline'>Back to Home</Link>
    </div>
  )
}

export default Error

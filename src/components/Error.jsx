import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({text,btn,subtext}) => {
  return (
    <div className='w-[100%] h-[500px] flex flex-col items-center justify-center gap-4'>
      <h3 className='text-grayishBlue font-bold text-[1.3rem]'>{text}</h3>
      {btn?<Link to='/'>Go back Home</Link>:<span className='font-semibold'>{subtext}</span>}
    </div>
  )
}

export default Error

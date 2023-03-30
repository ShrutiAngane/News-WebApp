import React from 'react'
import loading from '../assets/cat-gray.gif'

export default function Spinner() {
  return (
    <div className='flex flex-col justify-start w-[82vw] h-[100vh] items-center'>
      {/* <img src={loading} alt='loading...' className='h-[50px]'></img> */}
      <img src={loading} alt='loader' className='h-[200px]'></img>
      <h2 className='text-[1.2rem] font-semibold md:w-[35%] text-center mt-3 font-loadingfont text-secondary'>Please wait while we are fetching all the latest news updates for you...</h2>
    </div>
  )
}

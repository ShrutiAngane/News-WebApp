import React from 'react'
import loading from '../assets/spinnergif.gif'

export default function Spinner() {
  return (
    <div className='flex justify-center'>
      <img src={loading} alt='loading...'></img>
    </div>
  )
}

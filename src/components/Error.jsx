import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    let error = useRouteError();
    console.log(error)
  return (
    <>
    <div className='bg-black flex items-center justify-center h-screen w-screen flex-col'>
        <h1 className='text-white font-bold text-lg'>Hey you are in a wrong url 😒</h1>
        <h2 className='text-white font-bold text-lg'>{error.status}</h2>
        <h2 className='text-white font-bold text-lg'>{error.data}</h2>
    </div>
      
    </>
  )
}

export default Error

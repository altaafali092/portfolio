import React from 'react'

const Contact = () => {
  return (
    <div className='mx-4 md:mx-16 lg:mx-[28rem] mt-8 mb-4'>
        <div className='flex justify-center items-center'>
            <button className='bg-black text-white p-2 rounded-lg text-sm px-4'>Contact</button> 
        </div>
        <div className='mt-4'>
            <h1 className='text-4xl text-center font-bold mb-3'>Get in Touch</h1>
            <h2 className='text-2xl text-gray-400 text-center'>Want to chat? Just shoot me a dm <span className='text-blue-400 hover:underline'><a href="">with a direct question on Linkedin</a></span>  and I'll respond whenever I can. I will ignore all soliciting.</h2>
        </div>
    </div>
  )
}

export default Contact
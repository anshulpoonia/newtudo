import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex sticky justify-center bg-blue-400'>
        <li className='m-2 p-2 font-bold'>Home</li>
        <li className='m-2 p-2 font-bold'>About</li>
        <li className='m-2 p-2 font-bold'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar

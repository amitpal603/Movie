import React from 'react'

function Nav({setSearch}) {

    
  return (
    <div>
      <nav className=' h-auto w-full bg-gray-500 shadow-lg text-white flex  flex-col justify-around items-center gap-6  md:flex-row md:h-20'>
        <h1 className=' text-2xl text-sky-500 font-bold mt-3 md:mt-0'>Movie<span className=' text-cyan-400'>App</span></h1>

        <form className=' md:mr-40 flex mb-3'>
            <input 
            onChange={(e) => setSearch(e.target.value)}
            className=' h-13 w-100 outline-none  border-sky-400 border-t-2 border-l-2 border-b-2 rounded-l-md font-mono font-bold pl-3'
            type="text" placeholder='Search Movie..' />
            <input 
            className=' px-4 py-3 font-bold bg-cyan-400  border-t-2 border-r-2 border-b-2 border-sky-400 rounded-r-md cursor-pointer'
            type="submit" value="Search" />
        </form>
        
      </nav>
    </div>
  )
}

export default Nav

import React from 'react'

function MovieCard({ filterData }) {
  return (
    <div className='flex flex-wrap justify-center items-center mt-5 gap-10'>
      { filterData.length  ? (
        filterData.map((movieData, index) => (
          <div
            key={index}
            className=' justify-between h-auto md:h-auto w-50 md:w-80 flex flex-col bg-purple-400 rounded-md shadow-lg transition-transform hover:scale-110 p-4'
          >
            <img
              className='md:h-60 h-40 w-full object-cover rounded-md'
              src={movieData.Poster }
              alt={movieData.Title}
            />
            <h1 className='mt-2 text-lg font-semibold'> 👉 Title: {movieData.Title}</h1>
            <p> 🎗️ Type: {movieData.Type}</p>
            <p> 🕝 Year: {movieData.Year}</p>
            <button 
            onClick={() => alert('Watch this movie..')}
            className=' px-3 py-2 bg-green-400 rounded-md mt-4 cursor-pointer font-bold'> Watch Now</button>
          </div>
        ))
      ) : (
        <p className='text-center text-xl text-red-500 mt-10 font-bold'> Search Any Movie.. </p>
      )}
    </div>
  )
}

export default MovieCard

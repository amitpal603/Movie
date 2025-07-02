import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'

function App() {

  const [search,setSearch] = useState('')
  const [movie,setMovie] = useState([])

  const filterData = movie.filter((data) => {
    const searchTerm = search.toLowerCase()

    if(searchTerm === ""){
      return true
    }
    return (
      data.Title.toLowerCase().includes(searchTerm) ||
     data.Year.toLowerCase().includes(searchTerm)
    )
  })

  const FetchMovieData = async() =>{
    try {
      const apiKey = "1f010df4"
    const resData = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
    const MovieData = await resData.json()
    if(MovieData.Search){
      setMovie(MovieData.Search)
    }
    else{
      setMovie([])
    }
    
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() =>{
    FetchMovieData()
  },[search])
 
  
  
  return (
    <div>
    <Nav setSearch={setSearch} filterData={filterData}/>
    <MovieCard filterData={filterData} />
    </div>
  )
}

export default App

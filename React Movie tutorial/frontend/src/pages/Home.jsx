/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";
function Home(){
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState([]) 
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)



  useEffect(()=>{
    // eslint-disable-next-line no-unused-vars
    const loadPopularMvies = async () =>{
      try {
        const popularMovies  = await getPopularMovies()
        setMovies(popularMovies)
      } catch (error) {
        setError("failed to load errors")
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    loadPopularMvies()
  },[])

  const handleSearch = async (e) =>{
    e.preventDefault()
    if(!searchQuery.trim()) return
    if(loading)return

    setLoading(true)
    try {
      const searchResult = await searchMovies(searchQuery)
      setMovies(searchResult)
      setError(null)
    } catch (error) {
      console.log(error)
      setError("failed")
    }
    finally{
      setLoading(false)
    }

  }
  return(
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search Movie" 
        className="search-input"
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? <div className="loading"></div>:  <div className="movies-grid">
        {movies.map((movie) =>(
          
<MovieCard movie = {movie} key={movie.id}/>
        ))}
      </div>}

     

    </div>
  )
}

export default Home
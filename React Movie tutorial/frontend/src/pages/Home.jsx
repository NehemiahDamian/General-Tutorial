import MovieCard from "../components/MovieCard"
function Home(){
  const movies = [
    {id: 1, title: "tae", release_date:2021},
    {id: 2, title: "tae1", release_date:2021},
    {id: 3, title: "tae2", release_date:2021},
    {id: 4, title: "tae3", release_date:2021},

  ]

  const handleSearch = () =>{

  }
  return(
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search Movie" 
        className="search-input" 
        />
        <button type="submot" className="search-button">Search</button>
      </form>
      
      <div className="movies-grid">
        {movies.map((movie) =>(
          <MovieCard movie = {movie} key={movie.id}/>
        ))}
      </div>

    </div>
  )
}

export default Home
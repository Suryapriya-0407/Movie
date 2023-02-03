import React, {useState, useEffect}from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import MovieListHeading from './Component/MovieListHeading';
import SearchBox from './Component/SearchBox';

function App() {

  const [movies, setMovies]=useState([]);
  const[searchValue, setSearchValue]=useState('');

  const getMovieRequest =async(searchValue) =>{
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=e502446a`;

    const responce =await fetch(url);
    const reponceJson = await responce.json();

    if(reponceJson.Search){
      setMovies(reponceJson.Search)
  }
};
useEffect(() =>{
  getMovieRequest(searchValue);
},[searchValue])
 return(
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading
        heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList
        movies={movies}
        />
      </div>
     
    </div>
  );
}

export default App;

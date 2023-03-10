import React from "react";

function MovieList(props){
    return(
        <div>
            {props.movies.map((movie,index)=>(
                <div className='image-container d-flex justify-content-start m3'>
                    <img src={movie.Poster} alt='movie'/>
                    </div>
            ))}
        </div>
    )
}
export default MovieList
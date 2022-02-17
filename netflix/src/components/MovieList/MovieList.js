import React from 'react'
import Movie from '../Movie/Movie.js';
export default function MovieList(props) {
    return (
        <>
            {
                props.movie1.map(movie => {return (<Movie key = {movie.id} obj = {movie} />);})
            }
        </>
    );
}

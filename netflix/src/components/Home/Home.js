import React, { useEffect, useState } from "react";
import MovieList from '../MovieList/MovieList.js';

export default function Home() {
    const [movie, setMovie] = useState();
    const getMovies = async () => {
        try {
            // const response = await fetch(`${process.env.BASE_URL}/trending`)
            const response = await fetch(`https://movies-library-asac-project.herokuapp.com/trinding`)
            const data = await response.json();
            setMovie(data);
        } catch (error) {}
    };
    useEffect(() => { getMovies();}, []);

    return (
        <>
            <h1>Netflix Project</h1>
            {
                movie && (<MovieList movies={movie} />)
            }
        </>
    );
}
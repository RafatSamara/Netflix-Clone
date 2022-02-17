import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList.js";
export default function Home() {
    const [Movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            // const response = await fetch(`${process.env.BASE_URL}/trending`)
            const response = await fetch(`https://movies-library-asac-project.herokuapp.com/trending`)
            const data = await response.json();
            setMovie(data);
        } catch (err) {}
    };
    useEffect(() => {getMovie();}, []);
    return (<>{ Movie && (<MovieList movie1={Movie} />)}</>)
}
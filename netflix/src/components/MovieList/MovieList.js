import Movie from '../Movie/Movie.js';
export default function MovieList(props) {

    return (
        <>
            {
                props.movies.map(singleMovie => {return (<Movie movie={singleMovie} />)})
            }
        </>
    );
}
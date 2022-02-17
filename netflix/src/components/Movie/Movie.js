import { useState } from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../ModalMovie/ModalMovie.js';
import classes from './Movie.css'

export default function Movie(props) {
    let singleMoveInfo = props.obj;
    const [show, setShow] = useState(false);
    const [chosenMovie, setSelected] = useState();

    const showModalMovie  = () => setShow(true);
    const colseModalMovieHandle = () => setShow(false);

    function handleModalMovie (movie) {
        showModalMovie ();
        setSelected(movie);
    }

    return (
        <>
            <div className='card'>
                <div className="container">
                    <h4><b>{singleMoveInfo.title}</b></h4> 
                    <p>{singleMoveInfo.overview}</p> 
                    <p>Comment: <span id="comment">[No comments Added]</span></p> 
                    <Button className='btn' variant="primary" onClick={() => handleModalMovie (singleMoveInfo)} >Movie Modal</Button>
                    <Button className='btn' variant="primary">Add to Favourite</Button>
                </div>
            </div>
            { chosenMovie && (< ModalMovie show={show} colseModalMovieHandle={colseModalMovieHandle} chosenMovie = {chosenMovie} />) }
        </>
    );
}

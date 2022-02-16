import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact us</Link>
                <Link to="list">Movies List</Link>
                <Link to="favourite">Favourite</Link>
                <Link to="subsicripe">Subsicripe</Link>
            </nav>
        </>
    );
}
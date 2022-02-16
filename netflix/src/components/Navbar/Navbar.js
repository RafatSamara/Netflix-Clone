import { Link } from "react-router-dom";
import classes from "./Navbar.css";
export default function Nav() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact us</Link></li>
                <li><Link to="list">Movies List</Link></li>
                <li><Link to="favourite">Favourite</Link></li>
                <li><Link to="subsicripe">Subsicripe</Link></li>
            </ul>
        </>
    );
}
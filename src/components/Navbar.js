import React, { useEffect } from 'react';
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";
import Notebook from "../components/images/notebook.png";


const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"tomato"}}>
            <Link className="navbar-brand" to="/">
                <Link className="navbar-brand" to="/"><img src={Notebook} alt="" width="50" height="40" /></Link>iNotebook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                    </li>
                </ul>
                {!localStorage.getItem('token') ? <form className="d-flex">
                    <Link className="btn btn-success" to="/login" role="button">Login</Link>
                    <Link className="btn btn-success mx-2" to="/signup" role="button">Signup</Link>
                </form> :<div><Link className='mx-2' to="/"></Link><button className="btn btn-success" onClick={handleLogout}>Logout</button></div>
                }
            </div>
        </nav>
    )
}

export default Navbar;
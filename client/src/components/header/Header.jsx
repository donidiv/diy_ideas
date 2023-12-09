import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header () {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand" to="/">
                        <strong><span>DIY</span> IDEAS</strong>
                    </Link>



                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/ideas">All DIY Ideas</Link>
                            </li>
                            

                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            
                            {isAuthenticated &&
                                (<li className="nav-item">
                                <Link className="nav-link" to="/ideas/create">Create idea</Link>
                            </li>
                            )}
                            {isAuthenticated && 
                            (<li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>)}
                            

                            {!isAuthenticated && 
                            (<li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>)}
                            {!isAuthenticated &&
                            (<li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>)}                          
                            
                        </ul>


                        {isAuthenticated && 
                        (<div className="d-none d-lg-block">

                        <Link to="/users/me" className="bi-person custom-icon me-3">user x`s profile</Link>
                    </div>)}

                    </div>
                </div>
            </nav>
    );
}
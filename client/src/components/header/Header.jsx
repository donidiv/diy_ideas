export default function Header () {
    return (
        <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="index.html">
                        <strong><span>DIY</span> IDEAS</strong>
                    </a>



                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/ideas">All DIY Ideas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ideas/create">Create idea</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/users">Users</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Logout</a>
                            </li>
                        </ul>

                        <div className="d-none d-lg-block">

                            <a href="/:userIdProfile" className="bi-person custom-icon me-3">user x`s profile</a>
                        </div>
                        
                            
                        

                    </div>
                </div>
            </nav>
    );
}
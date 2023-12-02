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

                    <div className="d-lg-none">
                        <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                        <a href="product-detail.html" className="bi-bag custom-icon"></a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="products.html">All DIY Ideas</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Users</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Logout</a>
                            </li>
                        </ul>

                        <div className="d-none d-lg-block">
                            <a href="/userIdProfile" className="bi-person custom-icon me-3"></a>
                        </div>
                    </div>
                </div>
            </nav>
    );
}
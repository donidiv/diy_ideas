import { useEffect, useState } from "react";

import * as userService from '../../services/userService';
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log(Object.values(users));
    return (
        <>

            {Object.values(users).length === 0 && (
                <section className="team section-padding">
                    <div className="container">
                        <div className="row">
                            <div>
                                <h2>There are no users yet...</h2>
                            </div>
                        </div>
                    </div>
                </section>)}

            {Object.values(users).length > 0 && (
                <section className="team section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h2 className="mb-5">All <span>users</span></h2>
                            </div>

                            {Object.values(users).map(user => (
                                

                                    <div className="col-lg-4 mb-4 col-12" key={user._id}>
                                        <div className="team-thumb d-flex align-items-center">
                                            <img src={user.image} className="img-fluid custom-circle-image team-image me-4" alt="" />

                                            <div className="team-info">
                                                <h5 className="mb-0"><Link to={`/users/${user._id}`}>{user.name}</Link></h5>
                                                <strong className="text-muted">{user.username}</strong>

                                                {/* <!-- Button trigger modal --> */}
                                                <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target={`#${user.username}`}>
                                                    <i className="bi-plus-circle-fill"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>




                                    

                                
                            ))}

                        </div>
                    </div>
                </section>


            )}
            {Object.values(users).map(user => (
                <>
                {/* <!-- TEAM MEMBER MODAL --> */}
                <div className="modal fade" id={`${user.username}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0">
                        <div className="modal-header flex-column">
                            <h3 className="modal-title" id="exampleModalLabel">{user.name}</h3>

                            <h6 className="text-muted">{user.username}</h6>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <h5 className="mb-4">{user.message}</h5>

                        </div>

                        <ul className="social-icon">
                            <li className="me-3"><strong>Where to find?</strong></li>
                            <li><a href={user.email} className="social-icon-link bi-envelope"></a></li>
                            <li><a href={user.instagram} className="social-icon-link bi-instagram"></a></li>
                            <li><a href={user.youtube} className="social-icon-link bi-youtube"></a></li>

                        </ul>
                    </div>
                </div>

            </div>
            </>
            ))}
        </>
    );
}
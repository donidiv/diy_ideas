import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as userService from '../../services/userService';
import * as ideaService from '../../services/ideaService';

export default function UserProfile() {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [ideas, setIdeas] = useState({});
    useEffect(() => {
        userService.getOne(userId)
            .then(setUser);

        ideaService.getAll()
            .then(setIdeas);

    }, [userId]);

    console.log(Object.values(ideas).length);
    let result = '';
    if(Object.values(ideas).length > 0){
        result = Object.values(ideas).filter(idea => idea._ownerId === user.userId);
    }
    console.log(result);
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center">
                        <h2 className="mb-5">User <span>{user.username}`s</span> profile information</h2>
                    </div>

                    <div className="col-lg-2 col-12 mt-auto mb-auto">
                        <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personal info</button>
                            </li>

                            {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">DIY ideas</button>
                                </li> */}

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">Projects</button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-10 col-12">
                        <div className="tab-content mt-2" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <div className="row">
                                    <div className="col-lg-7 col-12">
                                        <img src={user.image} className="img-fluid" alt="" />
                                    </div>

                                    <div className="col-lg-5 col-12">
                                        <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                            <h4 className="mb-3"><span>{user.username}</span></h4>
                                            <h5 className="mb-3"><span>{user.name}</span></h5>

                                            <p>Personal info: {user.message}</p>

                                            <h6>You can find me:</h6>
                                            <div>
                                                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', gap: '2em' }}>
                                                    <li><a href={user.email} className="bi-envelope-fill custom-icon me-3">{user.email}</a></li>
                                                    <li><a href={user.instagram} className="bi-instagram custom-icon me-3">{user.instagram}</a></li>
                                                    <li><a href={user.youtube} className="bi-youtube custom-icon me-3">{user.youtube}</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                                <div className="row">


                                    <div className="col-lg-5 col-12">
                                        <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                            <h4 className="mb-3">{user.username}`s projects</h4>
                                        </div>


                                    </div>

                                </div>
                                {Object.values(result).length === 0 && (
                                  <div>
                                    <h2>There are no ideas yet...</h2>
                                </div>  
                                )}
                                
                                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    {Object.values(result).map(idea => (
                                        <>
                                         <div className="col-lg-4 mb-4 col-12">
                                    <div className="team-thumb d-flex align-items-center">
                                        <img src={idea.image} className="img-fluid custom-circle-image team-image me-4" alt="" />

                                        <div className="team-info">
                                            <h5 className="mb-0"><Link to={`/ideas/${idea._id}`}>{idea.name}</Link></h5>
                                            <strong className="text-muted">{idea.category}</strong>

                                            

                                        </div>
                                    </div>
                                </div>
                                        </>
                                    ))}
                               
                                
                               
                                
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
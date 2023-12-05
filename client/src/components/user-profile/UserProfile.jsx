export default function UserProfile() {
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center">
                        <h2 className="mb-5">User <span>x`s</span> profile information</h2>
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
                                        <img src="images/pim-chu-z6NZ76_UTDI-unsplash.jpeg" className="img-fluid" alt="" />
                                    </div>

                                    <div className="col-lg-5 col-12">
                                        <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                            <h4 className="mb-3"><span>username</span></h4>
                                            <h5 className="mb-3"><span>Full Name</span></h5>

                                            <p>Personal info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti libero voluptates sunt labore natus vitae non quia, nobis voluptatem ipsa molestiae perspiciatis deleniti porro totam quas, saepe facere voluptatibus id inventore? Repudiandae error ab doloribus dolorem esse aliquid nobis voluptatem quam in nemo provident recusandae praesentium, nesciunt consectetur distinctio.</p>

                                            <h6>You can find me:</h6>
                                            <div>
                                                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', gap: '2em' }}>
                                                    <li><a href="/email" className="bi-envelope-fill custom-icon me-3">email@gmail.com</a></li>
                                                    <li><a href="/instagram" className="bi-instagram custom-icon me-3">instagram</a></li>

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
                                            <h4 className="mb-3">user`s projects</h4>
                                        </div>


                                    </div>

                                </div>
                                <div>
                                    <h2>There are no ideas yet...</h2>
                                </div>
                                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <div className="col-lg-4 mb-4 col-12">
                                    <div className="team-thumb d-flex align-items-center">
                                        <img src="images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg" className="img-fluid custom-circle-image team-image me-4" alt="" />

                                        <div className="team-info">
                                            <h5 className="mb-0"><a href="/:ideaId/details">Don</a></h5>
                                            <strong className="text-muted">Product, VP</strong>

                                            

                                        </div>
                                    </div>
                                </div>
                                
                               
                                
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
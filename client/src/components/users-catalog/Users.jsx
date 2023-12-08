export default function Users () {
    return (
        <>
       <section className="team section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="mb-5">All <span>users</span></h2>
                        </div>


                        <div>
                            <h2>There are no users yet...</h2>
                        </div>


                        <div className="col-lg-4 mb-4 col-12">
                            <div className="team-thumb d-flex align-items-center">
                                <img src="images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg" className="img-fluid custom-circle-image team-image me-4" alt="" />

                                <div className="team-info">
                                    <h5 className="mb-0"><a href="/users/:userId">Don</a></h5>
                                    <strong className="text-muted">Product, VP</strong>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#don">
                                      <i className="bi-plus-circle-fill"></i>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            

        {/* <!-- TEAM MEMBER MODAL --> */}
        <div className="modal fade" id="don" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0">
                    <div className="modal-header flex-column">
                        <h3 className="modal-title" id="exampleModalLabel">Don Haruko</h3>

                        <h6 className="text-muted">Product, VP</h6>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <h5 className="mb-4">Over three years in business had the chance to work on variety of projects, with companies</h5>

                        <div className="row mb-4">
                            <div className="col-lg-6 col-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="col-lg-6 col-12">
                                <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.</p>
                            </div>
                        </div>

                        <ul className="social-icon">
                            <li className="me-3"><strong>Where to find?</strong></li>

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>

                            <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        </>
    );
}
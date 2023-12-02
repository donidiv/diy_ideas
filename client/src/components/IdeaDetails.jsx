import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default function IdeaDetails () {
    return (
        <>
                    <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">More info</span>
                                <span className="d-block text-dark">about the project</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="product-detail section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="product-thumb">
                                <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                        <div>
                                    <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', gap: '2em'}}>
                                        <li><FontAwesomeIcon icon={faHeart} /></li>
                                        <li>edit</li>
                                        <li>delete</li>
                                    </ul>
                                </div>
                            <div className="product-info d-flex">
                                
                                <div>
                                    
                                    <h2 className="product-title mb-0">Tree pot</h2>
                                    
                                    <p className="product-p">Original package design from house</p>
                                </div>

                                {/* <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small> */}
                            </div>

                            <div className="product-description">

                                <strong className="d-block mt-4 mb-2">Description</strong>

                                <p className="lead mb-5">Over three years in business, We`ve had the chance to work on a variety of projects, with companies.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                        <form role="form">
                        <div className="form-floating mb-4">
                                    <textarea id="message" name="message" className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}}></textarea>

                                    <label htmlFor="message">Write a comment</label>
                                </div>

                                <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Comment
                                        </button>
                        </form>
                        </div>
                        </div>

                            

                        </div>


                       
                        

                    </div>
                </div>
            </section>


           

            </>
    );
}
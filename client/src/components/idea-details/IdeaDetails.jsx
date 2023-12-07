import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as ideaService from '../../services/ideaService';

import * as commentService from '../../services/commentService';


export default function IdeaDetails () {
    const [idea, setIdea] = useState({});
    const {ideaId} = useParams();

    useEffect(() => {
        ideaService.getOne(ideaId)
            .then(setIdea);
    }, [ideaId]);


    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            ideaId,
            formData.get('username'),
            formData.get('message'),
        );
        console.log(newComment);
    };

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
                                <img src={idea.image} className="img-fluid product-image" alt={idea.name} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                        <div>
                                    <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', gap: '2em'}}>

                                        <li><a href="/likes" className="bi-heart custom-icon me-3"></a>0</li>
                                        {/* <li><a href="/likes" className="bi-heart-fill product-icon"></a>0</li> */}
                                        <li><a href="/likes" className="bi-pencil-square custom-icon me-3"></a>Edit</li>
                                        <li><a href="/likes" className="bi-trash-fill custom-icon me-3"></a>Delete</li>

                                    </ul>
                                </div>
                            <div className="product-info d-flex">
                                
                                <div>
                                    
                                    <h2 className="product-title mb-0">{idea.name}</h2>
                                    
                                    <p className="product-p">{idea.category}</p>
                                </div>

                                {/* <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small> */}
                            </div>

                            <div className="product-description">

                                <strong className="d-block mt-4 mb-2">Description</strong>

                                <p className="lead mb-5">{idea.description}</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                        <form role="form" onSubmit={addCommentHandler}>
                        <div className="form-floating mb-4">
                            <input type="text" name="username" placeholder="username"/>
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



            <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">There are not comments for<br /> <span>XXX</span> yet...</h2>

                            
                        </div>

                    </div>
                </div>
            </section>

            <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">Comments for<br /> <span>XXX</span> idea</h2>

                            <div className="slick-testimonial">
                                <div className="slick-testimonial-caption">
                                    <p className="lead">Over three years in business, We`ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span><strong className="text-muted"><a href="/:userId/details">x user`s profile</a></strong></span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>



           

            </>
    );
}
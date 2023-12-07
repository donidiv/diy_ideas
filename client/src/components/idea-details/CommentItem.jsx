export default function CommentItem ({
    username,
    text,
}) {
    return (<div className="slick-testimonial">
                                <div className="slick-testimonial-caption">
                                    <p className="lead">{text}</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span><strong className="text-muted"><a href="/:userId/details">{username}</a></strong></span>
                                    </div>
                                </div>
                                
                            </div>
    );
   

                            
}
export default function CommentItem({
    text,
    owner:{username, image},
}) {
    
    return (<div className="slick-testimonial">
        <div className="slick-testimonial-caption">
            <p className="lead">{text}</p>

            <div className="slick-testimonial-client d-flex align-items-center mt-4">
                <img src={image} className="img-fluid custom-circle-image me-3" alt="" />

                <span><strong className="text-muted">{username}</strong></span>
            </div>
        </div>

    </div>
    );



}
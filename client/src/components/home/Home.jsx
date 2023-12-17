import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="slick-slideshow">
      <div className="slick-custom">
        <img
          src="images/slideshow/arno-smit-iI72r3gSwWY-unsplash.jpg"
          className="img-fluid"
          alt=""
        />

        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">DIY Ideas</h1>

                <p className="lead text-white mt-lg-3 mb-lg-5">
                Welcome to DIY Ideas - Your Ultimate DIY Inspiration Hub!

At DIY Ideas, we believe that creativity knows no bounds, and the joy of crafting is for everyone. Our mission is to be your go-to resource for all things do-it-yourself, providing a treasure trove of ideas, inspiration, and step-by-step guides to unleash your inner maker. 
                </p>

                <Link to="/about" className="btn custom-btn">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

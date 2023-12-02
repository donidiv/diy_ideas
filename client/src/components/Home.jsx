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
                  This is the place where you can share your DIY project and and inspire from others. 
                </p>

                <a href="about.html" className="btn custom-btn">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slick-custom">
        <img
          src="images/slideshow/team-meeting-renewable-energy-project.jpeg"
          className="img-fluid"
          alt=""
        />

        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">New Design</h1>

                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Please share this Little Fashion template to your friends.
                  Thank you for supporting us.
                </p>

                <a href="product.html" className="btn custom-btn">
                  Explore products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slick-custom">
        <img
          src="images/slideshow/two-business-partners-working-together-office-computer.jpeg"
          className="img-fluid"
          alt=""
        />

        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">Talk to us</h1>

                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Tooplate is one of the best HTML CSS template websites for
                  everyone.
                </p>

                <a href="contact.html" className="btn custom-btn">
                  Work with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="slick-dots" style={{display: 'block'}} role="tablist">
        <li className="" role="presentation">
          <button
            type="button"
            role="tab"
            id="slick-slide-control00"
            aria-controls="slick-slide00"
            aria-label="1 of 3"
            tabIndex="0"
            // aria-selected="true"
          >
            1
          </button>
        </li>
        <li role="presentation" className="">
          <button
            type="button"
            role="tab"
            id="slick-slide-control01"
            aria-controls="slick-slide01"
            aria-label="2 of 3"
            tabIndex="0"
          >
            2
          </button>
        </li>
        <li role="presentation" className="">
          <button
            type="button"
            role="tab"
            id="slick-slide-control02"
            aria-controls="slick-slide02"
            aria-label="3 of 3"
            tabIndex="0"
          >
            3
          </button>
        </li>
      </ul>
    </section>
  );
}

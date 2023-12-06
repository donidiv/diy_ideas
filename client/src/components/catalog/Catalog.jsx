import { useEffect, useState } from "react";
import * as ideaService from '../../services/ideaService';

export default function Catalog () {
    const [ideas, setIdeas] = useState([]);
    useEffect(() => {
        ideaService.getAll()
            .then(result => setIdeas(result));
    }, []);
    return (
        <>
        <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">ALL</span>
                                <span className="d-block text-dark">DIY projects</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="products section-padding">
                <div className="container">

                    <div>
                        <h2>There are no ideas yet...</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                                <a href="/:ideaId/details">
                                    <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt="" />
                                </a>



                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="/:ideaId/details" className="product-title-link">Juice Drinks</a>
                                        </h5>

                                        <p className="product-p"><a href="/:userId/details">owner`s name</a></p>
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
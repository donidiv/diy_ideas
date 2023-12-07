import { useEffect, useState } from "react";
import * as ideaService from '../../services/ideaService';

import CatalogItem from "./CatalogItem";


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
                    {ideas.length === 0 &&
                    (<div>
                        <h2>There are no ideas yet...</h2>
                    </div>)
                    }
                    <div className="row">
                        {ideas.map(idea => (
                            <CatalogItem key={idea._id} {...idea}/>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
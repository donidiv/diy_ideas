import { useEffect, useState } from "react";
import * as ideaService from '../../services/ideaService';
import * as userService from '../../services/userService';

import CatalogItem from "./CatalogItem";


export default function Catalog () {
    const [ideas, setIdeas] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        ideaService.getAll()
            .then(result => setIdeas(result))
            .catch(err => {
                console.log(err);
            });

        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    // const owner = Object.values(users).filter(user => (ideas.map(idea=>idea._ownerId === user.userId)));
    // console.log(owner);
    console.log(ideas);
    
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
                        {/* {ideas.map(idea => (
                            <CatalogItem key={idea._id} {...idea}/>
                        ))} */}
                        {ideas.map(idea => (
                            <CatalogItem key={idea._id} {...idea} owner = {[Object.values(users).filter(user=>user.userId === idea._ownerId)]} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
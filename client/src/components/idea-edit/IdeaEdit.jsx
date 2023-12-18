import { useNavigate, useParams } from "react-router-dom";

import * as ideaService from '../../services/ideaService';
import { useEffect, useState } from "react";
import Path from "../../paths";

import styles from './IdeaEdit.module.css';

export default function IdeaEdit () {

    const navigate = useNavigate();
    const {ideaId} = useParams();
    const [idea, setIdea] = useState({
        name: '',
        category: '',
        image: '',
        description: '',
    });

    useEffect(() => {
        ideaService.getOne(ideaId)
            .then(result => {
                setIdea(result);
            });
    }, [ideaId]);

    const editIdeaSubmitHandler = async (e) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await ideaService.edit(ideaId, values);
            navigate(Path.Ideas);
        } catch (error) {
            //TODO error notification
            console.log(error);
        }
    };

    // const {values, onChange, onSubmit} = useForm(editIdeaSubmitHandler, idea);

    const onChange = (e) => {
        setIdea(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    
    return (
        <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 mx-auto col-12">

                            <h1 className="hero-title text-center mb-5">Edit {idea.name} project</h1>

                            

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" onSubmit={editIdeaSubmitHandler} 
                                    // method="post"
                                    >

                                        

                                        <div className="form-floating">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required value={idea.name} onChange={onChange}/>

                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="form-floating my-4">
                                            <input type="text" name="category" id="category" className="form-control" placeholder="Category" required value={idea.category} onChange={onChange}/>

                                            <label htmlFor="category">Category</label>
                                        </div>
                                        
                                        <div className="form-floating my-4">
                                            <input type="text" name="image" id="image" className="form-control" placeholder="image" required value={idea.image} onChange={onChange}/>

                                            <label htmlFor="image">Image</label>
                                        </div>

                                        <div className="form-floating mb-4">
                                    <textarea id="description" name="description" className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}} value={idea.description} onChange={onChange}></textarea>

                                    <label htmlFor="description">Description</label>
                                </div>
                                  
                                        
                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Edit
                                        </button>

                                        
                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
    );
}
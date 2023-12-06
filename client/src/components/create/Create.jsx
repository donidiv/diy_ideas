import { useNavigate } from "react-router-dom";

import * as ideaService from '../../services/ideaService';

export default function Create () {

    const navigate = useNavigate();
    const createIdeaSubmitHandler = async (e) => {
        e.preventDefault();

        const ideaData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await ideaService.create(ideaData);
            navigate('/ideas');
        } catch (error) {
            console.log(error);            
        }

    };
    return (
        <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 mx-auto col-12">

                            <h1 className="hero-title text-center mb-5">Create DIY project</h1>

                            

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" onSubmit={createIdeaSubmitHandler} 
                                    // method="post"
                                    >

                                        

                                        <div className="form-floating">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />

                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="form-floating my-4">
                                            <input type="text" name="category" id="category" className="form-control" placeholder="Category" required />

                                            <label htmlFor="category">Category</label>
                                        </div>
                                        
                                        <div className="form-floating my-4">
                                            <input type="text" name="image" id="image" className="form-control" placeholder="image" required />

                                            <label htmlFor="image">Image</label>
                                        </div>

                                        <div className="form-floating mb-4">
                                    <textarea id="description" name="description" className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}}></textarea>

                                    <label htmlFor="description">Description</label>
                                </div>
                                  
                                        
                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Create
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
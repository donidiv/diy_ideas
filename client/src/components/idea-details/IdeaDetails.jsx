import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as ideaService from '../../services/ideaService';

import * as commentService from '../../services/commentService';

import CommentItem from "./CommentItem";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import reducer from "./commentReducer";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

import styles from './IdeaDetails.module.css';


export default function IdeaDetails () {
    const navigate = useNavigate();
    const {username, userId} = useContext(AuthContext);
    const [idea, setIdea] = useState({});
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const {ideaId} = useParams();

    useEffect(() => {
        ideaService.getOne(ideaId)
            .then(setIdea);


        commentService.getAll(ideaId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [ideaId]);


    // const addCommentHandler = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            ideaId,
            values.message,
        );
        console.log(values.message);
        newComment.owner = {username};
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        });
    };
    // const initialValues = useMemo(() => ({
    //     message: '',
    // }), []);

    // const {values, onChange, onSubmit} = useForm(addCommentHandler, initialValues);

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${idea.name}`);

        if (hasConfirmed){
            await ideaService.remove(ideaId);
            navigate(Path.Ideas);
        }
    };
    const {values, onChange, onSubmit} = useForm(addCommentHandler, {
        message: '',
    });

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

                                        {userId !== idea._ownerId & !!username && (
                                            <li><a href="/likes" className="bi-heart custom-icon me-3"></a>0</li>
                                        )}
                                        {/* <li><a href="/likes" className="bi-heart-fill product-icon"></a>0</li> */}
                                        {userId === idea._ownerId && (
                                            <li><Link to={pathToUrl(Path.IdeaEdit, {ideaId})} className="bi-pencil-square custom-icon me-3"></Link>Edit</li>                                            
                                        )}
                                        {userId === idea._ownerId && (
                                        <li><button className={`${styles.trash} bi-trash-fill custom-icon me-3`} onClick={deleteButtonClickHandler}></button>Delete</li>                                            
                                        )}

                                    </ul>
                                </div>
                            <div className="product-info d-flex">
                                
                                <div>
                                    
                                    <h2 className="product-title mb-0">{idea.name}</h2>
                                    
                                    <p className="product-p">{idea.category?.toUpperCase()}</p>
                                </div>

                                {/* <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small> */}
                            </div>

                            <div className="product-description">

                                <strong className="d-block mt-4 mb-2">Description</strong>

                                <p className="lead mb-5">{idea.description}</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                        <form role="form" onSubmit={onSubmit}>
                        <div className="form-floating mb-4">
                            {/* <input type="text" name="username" placeholder="username"/> */}
                                    <textarea id="message" name="message" value={values.message} onChange={onChange} className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}}></textarea>

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


            {comments.length === 0 && (
                <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">There are not comments for<br /> <span>{idea.name}</span> yet...</h2>

                            
                        </div>

                    </div>
                </div>
            </section>
            )}

            

            {comments.length > 0 && (
                <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">Comments for<br /> <span>{idea.name}</span></h2>

                            
                        </div>

                        {comments.map((comment) => (
                            <CommentItem key={comment._id} {...comment}/>
                        ))}

                    </div>
                </div>
            </section>

            )}

                      

            </>
    );
}
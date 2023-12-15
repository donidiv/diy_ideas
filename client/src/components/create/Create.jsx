import { useNavigate } from "react-router-dom";

import * as ideaService from '../../services/ideaService';
import { useEffect, useRef, useState } from "react";
import Path from "../../paths";

import styles from './Create.module.css';
const formInitialState = {
    name: '',
    category: 'clothing',
    image: '',
    description: '',
    
};

export default function Create () {

    const nameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (!isMountedRef.current){
            isMountedRef.current = true;
            return;
        }
        console.log('Form is updated!');
    }, [formValues]);
    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };


    const createIdeaSubmitHandler = async (e) => {
        e.preventDefault();

        const ideaData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await ideaService.create(ideaData);
            navigate(Path.Ideas);
        } catch (error) {
            console.log(error);            
        }
        
        resetFormHandler();
    };

    const imageValidator = () => {
        console.log(formValues.image);
        if (formValues.image === ''){
            setErrors(state => ({
                ...state,
                image: 'Image is required!'
            }));
        } else if (!formValues.image?.startsWith('http')){

            setErrors(state => ({
                ...state,
                image: 'Image should be a valid link.',
            }));
        } else {
            if (errors.image) {
                setErrors(state => ({
                    ...state,
                    image: '',
                }));
            }
        }
    };
    const nameValidator = () => {
        console.log(formValues.name);
        if (formValues.name === ''){
            setErrors(state => ({
                ...state,
                name: 'Title is required!'
            }));
        } else if (formValues.name.length < 2){
            setErrors(state => ({
                ...state,
                name: 'Title should be at least 2 characters long!',
            }));
        } else {
            if (errors.name) {
                setErrors(state => ({
                    ...state,
                    name: '',
                }));
            }
        }
    };
    const descriptionValidator = () => {
        console.log(formValues.description);
        if (formValues.description === ''){
            setErrors(state => ({
                ...state,
                description: 'Description is required!'
            }));
        } else if (formValues.description.length < 10){
            setErrors(state => ({
                ...state,
                description: 'Description should be at least 10 characters long!',
            }));
        } else {
            if (errors.description) {
                setErrors(state => ({
                    ...state,
                    description: '',
                }));
            }
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
                                            <input type="text" name="name" id="name" className={`form-control ${errors.name && styles.inputError}`} placeholder="Name" required ref={nameInputRef} value={formValues.name} onChange={changeHandler} onBlur={nameValidator}/>
                                            {errors.name && (
                        <p className={styles.errorMessage}>{errors.name}</p>
                    )}
                                            <label htmlFor="name">Title</label>
                                        </div>
                                        <div className="form-floating my-4">
                                        <label htmlFor="category">Category</label>
                                        <select name="category" id="category" className="form-control">
                                            <option value="clothing" >Clothing</option>
                                            <option value="decoration" >Decoration</option>
                                            <option value="jewelry" >Jewelry</option>
                                            <option value="cooking" >Cooking</option>
                                            <option value="repair" >Repair</option>
                                            <option value="other" >Other</option>
                                        </select>
                                        </div>
                                        
                                        <div className="form-floating my-4">
                                            <input type="text" name="image" id="image" className="form-control" placeholder="image" required value={formValues.image} onChange={changeHandler} onBlur={imageValidator}/>
                                            {errors.image && (
                        <p className={styles.errorMessage}>{errors.image}</p>
                    )}
                                            <label htmlFor="image">Image</label>
                                        </div>

                                        <div className="form-floating mb-4">
                                    <textarea id="description" name="description" className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}} value={formValues.description} onChange={changeHandler} onBlur={descriptionValidator}></textarea>
                                    {errors.description && (
                        <p className={styles.errorMessage}>{errors.description}</p>
                    )}
                                    <label htmlFor="description">Description</label>
                                </div>
                                  
                                        
                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3"
                                        disabled={Object.values(errors).some(x => x)}>
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
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

import styles from './Register.module.css';

const registerFormKeys = {
    Email: 'email',
    Name: 'name',
    Username: 'username',
    Instagram: 'instagram',
    Youtube: 'youtube',
    Image: 'image',
    Message: 'message',
    Password: 'password',
    ConfirmPassword: 'confirm_password',

};


export default function Register () {
    const [errors, setErrors] = useState({});
    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Name]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Instagram]: '',
        [registerFormKeys.Youtube]: '',
        [registerFormKeys.Image]: '',
        [registerFormKeys.Message]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.ConfirmPassword]: '',
    });

    const resetFormHandler = () => {
        setErrors({});
    };

    const emailValidator = () => {
        console.log(values[registerFormKeys.Email]);
        if (values[registerFormKeys.Email] === ''){
            setErrors(state => ({
                ...state,
               Email: 'Email is required!'
            }));
        } else if (!values[registerFormKeys.Email].endsWith('@gmail.com')){
            setErrors(state => ({
                ...state,
                Email: 'Email is not valid!',
            }));
        } else {
            if (errors.Email) {
                setErrors(state => ({
                    ...state,
                    Email: '',
                }));
            }
        }
    };
    const nameValidator = () => {
        console.log(values[registerFormKeys.Name]);
        if (values[registerFormKeys.Name] === ''){
            setErrors(state => ({
                ...state,
               Name: 'Name is required!'
            }));
        } else if (values[registerFormKeys.Name].length < 4){
            setErrors(state => ({
                ...state,
                Name: 'Name should be at least 4 characters long!',
            }));
        } else {
            if (errors.Name) {
                setErrors(state => ({
                    ...state,
                    Name: '',
                }));
            }
        }
    };
    const usernameValidator = () => {
        console.log(values[registerFormKeys.Username]);
        if (values[registerFormKeys.Username] === ''){
            setErrors(state => ({
                ...state,
               Username: 'Username is required!'
            }));
        } else if (values[registerFormKeys.Username].length < 2){
            setErrors(state => ({
                ...state,
                Username: 'Username should be at least 2 characters long!',
            }));
        } else {
            if (errors.Username) {
                setErrors(state => ({
                    ...state,
                    Username: '',
                }));
            }
        }
    };
    const instagramValidator = () => {
        console.log(values[registerFormKeys.Instagram]);
        if (values[registerFormKeys.Instagram] === ''){
            setErrors(state => ({
                ...state,
                Instagram: 'Instagram is required!'
            }));
        } else if (!values[registerFormKeys.Instagram].startsWith('https://www.instagram.com/')){
            setErrors(state => ({
                ...state,
                Instagram: 'Invalid Instagram link',
            }));
        } else {
            if (errors.Instagram) {
                setErrors(state => ({
                    ...state,
                    Instagram: '',
                }));
            }
        }
    };
    const youtubeValidator = () => {
        console.log(values[registerFormKeys.Youtube]);
        if (values[registerFormKeys.Youtube] === ''){
            setErrors(state => ({
                ...state,
                Youtube: 'Youtube is required!'
            }));
        } else if (!values[registerFormKeys.Youtube].startsWith('https://www.youtube.com/')){
            setErrors(state => ({
                ...state,
                Youtube: 'Invalid Youtube link',
            }));
        } else {
            if (errors.Youtube) {
                setErrors(state => ({
                    ...state,
                    Youtube: '',
                }));
            }
        }
    };
    const imageValidator = () => {
        console.log(values[registerFormKeys.Image]);
        if (values[registerFormKeys.Image] === ''){
            setErrors(state => ({
                ...state,
                Image: 'Image is required!'
            }));
        } else if (!values[registerFormKeys.Image]?.startsWith('http')){
            setErrors(state => ({
                ...state,
                Image: 'Invalid Image link',
            }));
        } else {
            if (errors.Image) {
                setErrors(state => ({
                    ...state,
                    Image: '',
                }));
            }
        }
    };
    const messageValidator = () => {
        console.log(values[registerFormKeys.Message]);
        if (values[registerFormKeys.Message] === ''){
            setErrors(state => ({
                ...state,
                Message: 'Description is required!'
            }));
        } else if (values[registerFormKeys.Message].length < 10){
            setErrors(state => ({
                ...state,
                Message: 'Description should be at least 10 characters long!',
            }));
        } else {
            if (errors.Message) {
                setErrors(state => ({
                    ...state,
                    Message: '',
                }));
            }
        }
    };
    const passwordValidator = () => {
        console.log(values[registerFormKeys.Password]);
        if (values[registerFormKeys.Password] === ''){
            setErrors(state => ({
                ...state,
                Password: 'Password is required!'
            }));
        } else if (values[registerFormKeys.Password].length < 6){
            setErrors(state => ({
                ...state,
                Password: 'Password should be at least 6 characters long!',
            }));
        } else {
            if (errors.Password) {
                setErrors(state => ({
                    ...state,
                    Password: '',
                }));
            }
        }
    };
    const confPasswordValidator = () => {
        console.log(values[registerFormKeys.ConfirmPassword]);
        if (values[registerFormKeys.ConfirmPassword] === ''){
            setErrors(state => ({
                ...state,
                ConfirmPassword: 'Confirmed password is required!'
            }));
        } else if (values[registerFormKeys.ConfirmPassword] !== values[registerFormKeys.Password]){
            setErrors(state => ({
                ...state,
                ConfirmPassword: 'Passwords mismatch!',
            }));
        } else {
            if (errors.ConfirmPassword) {
                setErrors(state => ({
                    ...state,
                    ConfirmPassword: '',
                }));
            }
        }
    };

    return (
        <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 mx-auto col-12">

                            <h1 className="hero-title text-center mb-5">Register</h1>

                            

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" onSubmit={onSubmit} 
                                    // method="post"
                                    >

                                        <div className="form-floating">
                                            <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            pattern="[^ @]*@[^ @]*"
                                            className="form-control"
                                            placeholder="Email address"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Email]}
                                            onBlur={emailValidator}
                                            onClick={resetFormHandler} />

                                            <label htmlFor="email">Email address</label>

                                            {errors.Email && (
                        <p className={styles.errorMessage}>{errors.Email}</p>
                    )}
                                        </div>

                                        <div className="form-floating my-4">
                                            <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="Full name"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Name]}
                                            onBlur={nameValidator}
                                            onClick={resetFormHandler} />

                                            <label htmlFor="name">Full name</label>

                                            {errors.Name && (
                        <p className={styles.errorMessage}>{errors.Name}</p>
                    )}
                                        </div>
                                        <div className="form-floating my-4">
                                            <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="form-control"
                                            placeholder="Username"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Username]}
                                            onBlur={usernameValidator}
                                            onClick={resetFormHandler} />

                                            <label htmlFor="username">Username</label>

                                            {errors.Username && (
                        <p className={styles.errorMessage}>{errors.Username}</p>
                    )}
                                        </div>
                                        <div className="form-floating my-4">
                                            <input
                                            type="text"
                                            name="instagram"
                                            id="instagram"
                                            className="form-control"
                                            placeholder="Instagram"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Instagram]}
                                            onBlur={instagramValidator}
                                            onClick={resetFormHandler}/>

                                            <label htmlFor="instagram">Instagram profile</label>

                                            {errors.Instagram && (
                        <p className={styles.errorMessage}>{errors.Instagram}</p>
                    )}
                                        </div>
                                        <div className="form-floating my-4">
                                            <input
                                            type="text"
                                            name="youtube"
                                            id="youtube"
                                            className="form-control"
                                            placeholder="Youtube"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Youtube]}
                                            onBlur={youtubeValidator}
                                            onClick={resetFormHandler}/>

                                            <label htmlFor="youtube">YouTube profile</label>

                                            {errors.Youtube && (
                        <p className={styles.errorMessage}>{errors.Youtube}</p>
                    )}
                                        </div>
                                        <div className="form-floating my-4">
                                            <input
                                            type="text"
                                            name="image"
                                            id="image"
                                            className="form-control"
                                            placeholder="image"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Image]}
                                            onBlur={imageValidator}
                                            onClick={resetFormHandler}/>

                                            <label htmlFor="image">Profile picture</label>

                                            {errors.Image && (
                        <p className={styles.errorMessage}>{errors.Image}</p>
                    )}
                                        </div>

                                        <div className="form-floating mb-4">
                                    <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    required
                                    style={{height: '160px'}}
                                    onChange={onChange}
                                    value={values[registerFormKeys.Message]}
                                    onBlur={messageValidator}
                                    onClick={resetFormHandler}
                                    ></textarea>

                                    <label htmlFor="message">Tell something about yourself</label>

                                    {errors.Message && (
                        <p className={styles.errorMessage}>{errors.Message}</p>
                    )}                                    
                                </div>

                                        
                                        <div className="form-floating my-4">
                                            <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            pattern="[0-9a-zA-Z]{4,10}"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.Password]}
                                            onBlur={passwordValidator}
                                            onClick={resetFormHandler}/>

                                            <label htmlFor="password">Password</label>
                                            {errors.Password && (
                        <p className={styles.errorMessage}>{errors.Password}</p>
                    )}              
                                            
                                        </div>

                                        <div className="form-floating">
                                            <input
                                            type="password"
                                            name="confirm_password"
                                            id="confirm_password"
                                            pattern="[0-9a-zA-Z]{4,10}"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            onChange={onChange}
                                            value={values[registerFormKeys.ConfirmPassword]}
                                            onBlur={confPasswordValidator}
                                            onClick={resetFormHandler}/>

                                            <label htmlFor="confirm_password">Password Confirmation</label>

                                            {errors.ConfirmPassword && (
                        <p className={styles.errorMessage}>{errors.ConfirmPassword}</p>
                    )}              
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3"
                                        disabled={Object.values(errors).some(x => x)}>
                                            Register
                                        </button>

                                        <p className="text-center">Already have an account? Please <Link to="/login">Sign In</Link></p>

                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

    );
}
import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import styles from './Login.module.css';
import { Link } from "react-router-dom";


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export default function Login () {    
    const [errors, setErrors] = useState({});
    const {loginSubmitHandler, serverError} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    });
    console.log(serverError);
    const resetFormHandler = () => {
        setErrors({});
    };

    const emailValidator = () => {
        console.log(values[LoginFormKeys.Email]);
        if (values[LoginFormKeys.Email] === ''){
            setErrors(state => ({
                ...state,
               Email: 'Email is required!'
            }));
        } else if (!values[LoginFormKeys.Email].endsWith('@gmail.com')){
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
    const passwordValidator = () => {
        console.log(values[LoginFormKeys.Password]);
        if (values[LoginFormKeys.Password] === ''){
            setErrors(state => ({
                ...state,
                Password: 'Password is required!'
            }));
        } else if (values[LoginFormKeys.Password].length < 6){
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
    return (
        <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 mx-auto col-12">

                            <h1 className="hero-title text-center mb-5">Login</h1>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" onSubmit={onSubmit}>

                                        <div className="form-floating mb-4 p-0">

                                            <input
                                            type="email"
                                            name={LoginFormKeys.Email}

                                            id="email"
                                            pattern="[^ @]*@[^ @]*"
                                            className="form-control"
                                            placeholder="Email address"
                                            required
                                            onChange={onChange}

                                            value={values[LoginFormKeys.Email]}
                                            onBlur={emailValidator}
                                            onClick={resetFormHandler} />


                                            <label htmlFor="email">Email address</label>

                                            {errors.Email && (
                        <p className={styles.errorMessage}>{errors.Email}</p>
                    )}
                                        </div>

                                        <div className="form-floating p-0">

                                            <input
                                            type="password"
                                            name={LoginFormKeys.Password}

                                            id="password"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            onChange={onChange}

                                            value={values[LoginFormKeys.Password]}
                                            onBlur={passwordValidator}
                                            onClick={resetFormHandler} />


                                            <label htmlFor="password">Password</label>

                                            {errors.Password && (
                        <p className={styles.errorMessage}>{errors.Password}</p>
                    )}
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3"
                                        disabled={Object.values(errors).some(x => x)}>
                                            Login
                                        </button>

                                        {serverError && (
                                            <p className={`${styles.errorMessage} text-center`}>{serverError}</p>
                                        )}

                                        <p className="text-center">Don`t have an account? <Link to="/register">Create One</Link></p>

                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

    );
}
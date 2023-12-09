import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

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
                                            value={values[registerFormKeys.Email]} />

                                            <label htmlFor="email">Email address</label>
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
                                            value={values[registerFormKeys.Name]} />

                                            <label htmlFor="name">Full name</label>
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
                                            value={values[registerFormKeys.Username]} />

                                            <label htmlFor="username">Username</label>
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
                                            value={values[registerFormKeys.Instagram]}/>

                                            <label htmlFor="instagram">Instagram profile</label>
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
                                            value={values[registerFormKeys.Youtube]}/>

                                            <label htmlFor="youtube">YouTube profile</label>
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
                                            value={values[registerFormKeys.Image]}/>

                                            <label htmlFor="image">Profile picture</label>
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
                                    ></textarea>

                                    <label htmlFor="message">Tell something about yourself</label>
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
                                            value={values[registerFormKeys.Password]}/>

                                            <label htmlFor="password">Password</label>
                                            
                                            {/* <p className="text-center">* shall include 0-9 a-z A-Z in 4 to 10 characters</p> */}
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
                                            value={values[registerFormKeys.ConfirmPassword]}/>

                                            <label htmlFor="confirm_password">Password Confirmation</label>
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
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
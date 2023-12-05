export default function Register () {
    return (
        <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 mx-auto col-12">

                            <h1 className="hero-title text-center mb-5">Register</h1>

                            

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" 
                                    // method="post"
                                    >

                                        <div className="form-floating">
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />

                                            <label htmlFor="email">Email address</label>
                                        </div>

                                        <div className="form-floating my-4">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />

                                            <label htmlFor="name">Full name</label>
                                        </div>
                                        <div className="form-floating my-4">
                                            <input type="text" name="username" id="username" className="form-control" placeholder="username" required />

                                            <label htmlFor="username">Username</label>
                                        </div>
                                        <div className="form-floating my-4">
                                            <input type="text" name="image" id="image" className="form-control" placeholder="image" required />

                                            <label htmlFor="image">Profile picture</label>
                                        </div>

                                        <div className="form-floating mb-4">
                                    <textarea id="message" name="message" className="form-control" placeholder="Leave a comment here" required style={{height: '160px'}}></textarea>

                                    <label htmlFor="message">Tell something about yourself</label>
                                </div>

                                        
                                        <div className="form-floating my-4">
                                            <input type="password" name="password" id="password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />

                                            <label htmlFor="password">Password</label>
                                            
                                            {/* <p className="text-center">* shall include 0-9 a-z A-Z in 4 to 10 characters</p> */}
                                        </div>

                                        <div className="form-floating">
                                            <input type="password" name="confirm_password" id="confirm_password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />

                                            <label htmlFor="confirm_password">Password Confirmation</label>
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Register
                                        </button>

                                        <p className="text-center">Already have an account? Please <a href="/login">Sign In</a></p>

                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

    );
}
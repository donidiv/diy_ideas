import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login ({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });
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
                                            value={values[LoginFormKeys.Email]} />

                                            <label htmlFor="email">Email address</label>
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
                                            value={values[LoginFormKeys.Password]} />

                                            <label htmlFor="password">Password</label>
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Login
                                        </button>

                                        <p className="text-center">Don`t have an account? <a href="/register">Create One</a></p>

                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

    );
}
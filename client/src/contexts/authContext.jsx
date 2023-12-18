import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../paths";

import * as authService from '../services/authService';
import * as userService from '../services/userService';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const [serverError, setServerError] = useState([]);
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
           const result = await authService.login(values.email, values.password);
        console.log(result);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home); 
        setServerError([]);
        } catch (error) {
            console.log(error);
            setServerError(error.message);
        }
        
    };
    const registerSubmitHandler = async (values) => {
        console.log(values);
        try {
            const result = await authService.register(values.email, values.password, values.username, values.image);

        setAuth(result);
        console.log(result);

        localStorage.setItem('accessToken', result.accessToken);


        navigate(Path.Home);
        setServerError([]);

    const saveUser = await userService.create({...values, userId: result._id});
        console.log(saveUser);
        } catch (error) {
            console.log(error);
            setServerError(error.message);
        }
        
    };


    const logoutHandler = () => {
        setAuth({});
        // navigate(Path.Home);
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        serverError,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        image: auth.image,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
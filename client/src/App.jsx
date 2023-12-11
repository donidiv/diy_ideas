import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Users from "./components/users-catalog/Users";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import IdeaDetails from "./components/idea-details/IdeaDetails";
import UserProfile from "./components/user-profile/UserProfile";
import { useState } from "react";

import {AuthProvider} from "./contexts/authContext";
import * as authService from './services/authService';
import Path from "./paths";
import Logout from "./components/logout/Logout";


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        console.log(result);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };
    const registerSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.register(values.email, values.password, values.username);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);


        navigate(Path.Home);
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
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    // console.log(auth.username);

    return (        
        <AuthProvider value={values}>
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />}/>
                <Route path={Path.About} element={<About />}/>
                <Route path={Path.Ideas} element={<Catalog />}/>
                <Route path={Path.Users} element={<Users />}/>
                <Route path={Path.Register} element={<Register />}/>
                <Route path={Path.Login} element={<Login />}/>
                <Route path={Path.Create} element={<Create />}/>

                <Route path={Path.IdeaDetails} element={<IdeaDetails />}/>

                <Route path={Path.UserProfile} element={<UserProfile />}/>
                <Route path={Path.Logout} element={<Logout />}/>
            </Routes>

            <Footer />
        </AuthProvider>
    );

}

export default App;

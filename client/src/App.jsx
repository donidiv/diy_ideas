import { Route, Routes } from "react-router-dom";

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
import AuthContext from "./contexts/authContext";
// app

function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        console.log(values);
    };

    return (        
        <AuthContext.Provider value={{loginSubmitHandler}}>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/ideas' element={<Catalog />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/ideas/create' element={<Create />}/>

                <Route path='/ideas/:ideaId' element={<IdeaDetails />}/>

                <Route path='/users/:userId' element={<UserProfile />}/>
            </Routes>

            <Footer />
        </AuthContext.Provider>
    );

}

export default App;

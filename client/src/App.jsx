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


function App() {

    return (        
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/ideas' element={<Catalog />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/ideas/create' element={<Create />}/>
                <Route path='/ideas/details' element={<IdeaDetails />}/>
                <Route path='/users/:userId/details' element={<UserProfile />}/>
            </Routes>

            <Footer />
        </>
    );

}

export default App;

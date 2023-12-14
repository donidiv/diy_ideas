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

import {AuthProvider} from "./contexts/authContext";
import Path from "./paths";
import Logout from "./components/logout/Logout";
import IdeaEdit from "./components/idea-edit/IdeaEdit";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";


function App() {
    return ( 
        <ErrorBoundary>      
        <AuthProvider >
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />}/>
                <Route path={Path.About} element={<About />}/>
                <Route path={Path.Ideas} element={<Catalog />}/>
                <Route path={Path.Users} element={<Users />}/>
                <Route path={Path.Register} element={<Register />}/>
                <Route path={Path.Login} element={<Login />}/>
                <Route element={<AuthGuard />}>
                    <Route path={Path.Create} element={<Create />}/>
                    <Route path={Path.IdeaEdit} element={<IdeaEdit />}/>
                    <Route path={Path.Logout} element={<Logout />}/>

                </Route>
                

                <Route path={Path.IdeaDetails} element={<IdeaDetails />}/>
            
                <Route path={Path.UserProfile} element={<UserProfile />}/>
            </Routes>

            <Footer />
        </AuthProvider>
        </ErrorBoundary> 
    );

}

export default App;
